# import cv2
# import pytesseract

# # Path to tesseract executable
# # pytesseract.pytesseract.tesseract_cmd = r'<path_to_tesseract>'

# # Load the image
# image = cv2.imread('/Users/habib/Documents/idify/pysrc/img/sample_id_1.jpeg')
# # image = cv2.imread('/Users/habib/Documents/idify/pysrc/img/sample_id_1.png')

# # Preprocess the image (optional steps for better accuracy)
# # Convert to grayscale
# gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# # Apply thresholding
# _, threshold_image = cv2.threshold(gray_image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

# # Extract text
# text = pytesseract.image_to_string(threshold_image, lang='eng')

# print(text)


from PIL import Image
import pytesseract

# Open the image file
img = Image.open("/Users/habib/Documents/idify/pysrc/img/sample_id_1.jpeg")

# Use tesseract to do OCR on the image
text = pytesseract.image_to_string(img)

print(text)
