from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import io
from PIL import Image
from pysrc.openai_helper import extract_user_details
import time
import os

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def main():
    return {"message": "Hello World"}

@app.post("/upload-image/")
async def create_upload_file(file: UploadFile = File(...)):
    try:
        # Read the file content
        file_content = await file.read()

        # Convert file content to an Image to verify and potentially convert it
        try:
            img = Image.open(io.BytesIO(file_content))
            img.verify()  # This verifies the header but does not load the file, so it's fast
            img_format = 'JPEG'  # Define the format you want to save as
        except Exception:
            return JSONResponse(content={"message": "Invalid image format!"}, status_code=400)

        file_name = str(int(time.time()))
        
        # Reopen the image for saving since verify() doesn't load the image
        img = Image.open(io.BytesIO(file_content))
        img.save(f"img/{file_name}.jpeg", format=img_format)  # Save as JPEG
        
        # Pass the base64 string to your function
        response = extract_user_details(file_name)
        
        # delete the image after processing
        os.remove(f"img/{file_name}.jpeg")
        
        # Return a response including the data from 'extract_user_details'
        return JSONResponse(content={"message": "Image received and processed!", "data": response}, status_code=200)

    except Exception as e:
        return JSONResponse(content={"message": str(e)}, status_code=500)
