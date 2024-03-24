# import libraries
import os
from load_env import endpoint, key
from azure.ai.formrecognizer import DocumentAnalysisClient
from azure.core.credentials import AzureKeyCredential

def analyze_identity_documents():
# sample document
    identityUrl = "https://www.alberta.ca/system/files/styles/responsive_1040/private/custom_downloaded_images/DL-Sally-Sample-AB-ID-Face-V8b-Sally-Sample.jpg?itok=5NbxXkry"

    document_analysis_client = DocumentAnalysisClient(
        endpoint=endpoint, credential=AzureKeyCredential(key)
    )

    poller = document_analysis_client.begin_analyze_document_from_url(
            "prebuilt-idDocument", identityUrl
        )
    id_documents = poller.result()
    

    for idx, id_document in enumerate(id_documents.documents):
        
        # # print("Fields from ID document: ", id_document.fields)
        # print("--------Analyzing ID document #{}--------".format(idx + 1))
        # first_name = id_document.fields.get("FirstName")
        # if first_name:
        #     print(
        #         "First Name: {} has confidence: {}".format(
        #             first_name.value, first_name.confidence
        #         )
        #     )
        # last_name = id_document.fields.get("LastName")
        # if last_name:
        #     print(
        #         "Last Name: {} has confidence: {}".format(
        #             last_name.value, last_name.confidence
        #         )
        #     )
        # document_number = id_document.fields.get("DocumentNumber")
        # if document_number:
        #     print(
        #         "Document Number: {} has confidence: {}".format(
        #             document_number.value, document_number.confidence
        #         )
        #     )
        # dob = id_document.fields.get("DateOfBirth")
        # if dob:
        #     print(
        #         "Date of Birth: {} has confidence: {}".format(dob.value, dob.confidence)
        #     )
        # doe = id_document.fields.get("DateOfExpiration")
        # if doe:
        #     print(
        #         "Date of Expiration: {} has confidence: {}".format(
        #             doe.value, doe.confidence
        #         )
        #     )
        # sex = id_document.fields.get("Sex")
        # if sex:
        #     print("Sex: {} has confidence: {}".format(sex.value, sex.confidence))
        # address = id_document.fields.get("Address")
        # if address:
        #     print(
        #         "Address: {} has confidence: {}".format(
        #             address.value, address.confidence
        #         )
        #     )
        # country_region = id_document.fields.get("CountryRegion")
        # if country_region:
        #     print(
        #         "Country/Region: {} has confidence: {}".format(
        #             country_region.value, country_region.confidence
        #         )
        #     )
        # region = id_document.fields.get("Region")
        # if region:
        #     print(
        #         "Region: {} has confidence: {}".format(region.value, region.confidence)
        #     )

        # print("--------------------------------------")
        
        user_data = {
            "first_name": id_document.fields.get("FirstName").value,
            "last_name": id_document.fields.get("LastName").value,
            "license_number": id_document.fields.get("DocumentNumber").value,
            "dob": id_document.fields.get("DateOfBirth").value,
            "doe": id_document.fields.get("DateOfExpiration").value,
            "sex": id_document.fields.get("Sex").value,
            "address": id_document.fields.get("Address").value,
            "postal_code": id_document.fields.get("PostalCode").value,
            "country": id_document.fields.get("Country").value,
            "region": id_document.fields.get("Region").value
        }
        print(user_data)

if __name__ == "__main__":
    analyze_identity_documents()
