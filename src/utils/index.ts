export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
export function getImagePaht(imagePath: string) {
  const baseURLCloudinary = "https://res.cloudinary.com";
  if (imagePath.startsWith(baseURLCloudinary)) {
    return imagePath;
  } else {
    return "/products/" + imagePath + ".jpg";
  }
}
