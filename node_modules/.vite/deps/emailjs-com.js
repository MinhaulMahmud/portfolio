//#region node_modules/emailjs-com/es/store/store.js
var store = { _origin: "https://api.emailjs.com" };
//#endregion
//#region node_modules/emailjs-com/es/methods/init/init.js
/**
* Initiation
* @param {string} userID - set the EmailJS user ID
* @param {string} origin - set the EmailJS origin
*/
var init = (userID, origin = "https://api.emailjs.com") => {
	store._userID = userID;
	store._origin = origin;
};
//#endregion
//#region node_modules/emailjs-com/es/utils/validateParams.js
var validateParams = (userID, serviceID, templateID) => {
	if (!userID) throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
	if (!serviceID) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
	if (!templateID) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
	return true;
};
//#endregion
//#region node_modules/emailjs-com/es/models/EmailJSResponseStatus.js
var EmailJSResponseStatus = class {
	constructor(httpResponse) {
		this.status = httpResponse.status;
		this.text = httpResponse.responseText;
	}
};
//#endregion
//#region node_modules/emailjs-com/es/api/sendPost.js
var sendPost = (url, data, headers = {}) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.addEventListener("load", ({ target }) => {
			const responseStatus = new EmailJSResponseStatus(target);
			if (responseStatus.status === 200 || responseStatus.text === "OK") resolve(responseStatus);
			else reject(responseStatus);
		});
		xhr.addEventListener("error", ({ target }) => {
			reject(new EmailJSResponseStatus(target));
		});
		xhr.open("POST", store._origin + url, true);
		Object.keys(headers).forEach((key) => {
			xhr.setRequestHeader(key, headers[key]);
		});
		xhr.send(data);
	});
};
//#endregion
//#region node_modules/emailjs-com/es/methods/send/send.js
/**
* Send a template to the specific EmailJS service
* @param {string} serviceID - the EmailJS service ID
* @param {string} templateID - the EmailJS template ID
* @param {object} templatePrams - the template params, what will be set to the EmailJS template
* @param {string} userID - the EmailJS user ID
* @returns {Promise<EmailJSResponseStatus>}
*/
var send = (serviceID, templateID, templatePrams, userID) => {
	const uID = userID || store._userID;
	validateParams(uID, serviceID, templateID);
	return sendPost("/api/v1.0/email/send", JSON.stringify({
		lib_version: "3.2.0",
		user_id: uID,
		service_id: serviceID,
		template_id: templateID,
		template_params: templatePrams
	}), { "Content-type": "application/json" });
};
//#endregion
//#region node_modules/emailjs-com/es/methods/sendForm/sendForm.js
var findHTMLForm = (form) => {
	let currentForm;
	if (typeof form === "string") currentForm = document.querySelector(form);
	else currentForm = form;
	if (!currentForm || currentForm.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
	return currentForm;
};
/**
* Send a form the specific EmailJS service
* @param {string} serviceID - the EmailJS service ID
* @param {string} templateID - the EmailJS template ID
* @param {string | HTMLFormElement} form - the form element or selector
* @param {string} userID - the EmailJS user ID
* @returns {Promise<EmailJSResponseStatus>}
*/
var sendForm = (serviceID, templateID, form, userID) => {
	const uID = userID || store._userID;
	const currentForm = findHTMLForm(form);
	validateParams(uID, serviceID, templateID);
	const formData = new FormData(currentForm);
	formData.append("lib_version", "3.2.0");
	formData.append("service_id", serviceID);
	formData.append("template_id", templateID);
	formData.append("user_id", uID);
	return sendPost("/api/v1.0/email/send-form", formData);
};
//#endregion
//#region node_modules/emailjs-com/es/index.js
var es_default = {
	init,
	send,
	sendForm
};
//#endregion
export { es_default as default, init, send, sendForm };

//# sourceMappingURL=emailjs-com.js.map