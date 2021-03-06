const sharp = require("sharp");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs-extra");
const uuid = require("uuid");
const imageUploadPath = path.resolve(process.env.UPLOADS_DIR);

// Save a photo and get filename
async function processAndSavePhoto(uploadedImage) {
	// Random File name to be saved
	const savedFileName = `${uuid.v1()}.jpg`;

	// Ensure the uploads path exists
	await fs.ensureDir(imageUploadPath);

	// Process image
	const finalImage = sharp(uploadedImage.data);

	// Check image size
	const imageInfo = await finalImage.metadata();

	// If image is wider than 500px resize it
	if (imageInfo.width > 500) {
		finalImage.resize(500);
	}

	// Save image
	await finalImage.toFile(path.join(imageUploadPath, savedFileName));

	return savedFileName;
}

function generateError(message, code) {
	const error = new Error(message);
	if (code) error.httpCode = code;
	return error;
}
function randomString(size = 20) {
	return crypto.randomBytes(size).toString("hex").slice(0, size);
}

module.exports = {
	processAndSavePhoto,
	generateError,
	randomString,
};
