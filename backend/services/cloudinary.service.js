import cloudinary from "cloudinary";
import { Readable } from "stream";

export const uploadOnCloudinary = async (file, folder) => {
  if (!file) return Promise.reject(new Error("No file provided for upload"));

  try {
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: "image",
        },
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        },
      );

      Readable.from(file.buffer).pipe(uploadStream);
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    return Promise.reject(error);
  }
};

export const uploadMultipleOnCloudinary = async (files, folder) => {
  if (!files || !files.length)
    return Promise.reject(new Error("No files provided for upload"));

  try {
    const uploadPromises = files.map((file) => uploadOnCloudinary(file, folder));
    const results = await Promise.all(uploadPromises);
    return results;
  } catch (error) {
    console.error("Error uploading files to Cloudinary:", error);
    return Promise.reject(error);
  }
};

export const deleteFromCloudinary = async (publicId) => {
  if (!publicId)
    return Promise.reject(new Error("No public ID provided for deletion"));

  try {
    await cloudinary.uploader.destroy(publicId);
    return { message: "File deleted successfully" };
  } catch (error) {
    console.error("Error deleting file from Cloudinary:", error);
    return Promise.reject(error);
  }
};
