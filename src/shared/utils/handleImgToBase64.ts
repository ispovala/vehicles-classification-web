export const handleImgToBase64: (file: File) => Promise<string> = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64String = reader.result as string;
      base64String = base64String.replace("data:image/png;base64,", "");
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
};
