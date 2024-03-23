from dotenv import load_dotenv
import os

# Load the .env file
load_dotenv()

# Now you can access your environment variables using os.getenv
openai_api_key = os.getenv("OPENAI_API_KEY")

# print(openai_api_key)
