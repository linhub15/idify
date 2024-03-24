import os
from azure.ai.formrecognizer import DocumentAnalysisClient
from azure.core.credentials import AzureKeyCredential
from azure.ai.documentintelligence.models import AnalyzeDocumentRequest
from azure.ai.documentintelligence import DocumentIntelligenceClient
from azure.ai.documentintelligence.models import AnalyzeResult, AnalyzeDocumentRequest

from pysrc.load_env import endpoint, key

# formatting function
def format_bounding_region(bounding_regions):
    if not bounding_regions:
        return "N/A"
    return ", ".join("Page #{}: {}".format(region.page_number, format_polygon(region.polygon)) for region in bounding_regions)

# formatting function
def format_polygon(polygon):
    if not polygon:
        return "N/A"
    return ", ".join(["[{}, {}]".format(p.x, p.y) for p in polygon])


def analyze_general_documents():
    # sample document
    docUrl = "https://www.alberta.ca/system/files/styles/responsive_1040/private/custom_downloaded_images/DL-Sally-Sample-AB-ID-Face-V8b-Sally-Sample.jpg?itok=5NbxXkry"

    # create your `DocumentAnalysisClient` instance and `AzureKeyCredential` variable
    document_analysis_client = DocumentAnalysisClient(endpoint=endpoint, credential=AzureKeyCredential(key))

    poller = document_analysis_client.begin_analyze_document_from_url(
            "prebuilt-document", docUrl)
    result = poller.result()

    # for style in result.styles:
    #     if style.is_handwritten:
    #         print("Document contains handwritten content: ")
    #         print(",".join([result.content[span.offset:span.offset + span.length] for span in style.spans]))

    # print("----Key-value pairs found in document----")
    # for kv_pair in result.key_value_pairs:
    #     if kv_pair.key:
    #         print(
    #                 "Key '{}' found within '{}' bounding regions".format(
    #                     kv_pair.key.content,
    #                     format_bounding_region(kv_pair.key.bounding_regions),
    #                 )
    #             )
    #     if kv_pair.value:
    #         print(
    #                 "Value '{}' found within '{}' bounding regions\n".format(
    #                     kv_pair.value.content,
    #                     format_bounding_region(kv_pair.value.bounding_regions),
    #                 )
    #             )
    
    extracted_text = ""

    for page in result.pages:
        # print("----Analyzing document from page #{}----".format(page.page_number))
        # print(
        #     "Page has width: {} and height: {}, measured with unit: {}".format(
        #         page.width, page.height, page.unit
        #     )
        # )

        for line_idx, line in enumerate(page.lines):
            extracted_text += line.content + " "
            # print(
            #     "...Line # {} has text content '{}' within bounding box '{}'".format(
            #         line_idx,
            #         line.content,
            #         format_polygon(line.polygon),
            #     )
            # )

        # for word in page.words:
        #     print(
        #         "...Word '{}' has a confidence of {}".format(
        #             word.content, word.confidence
        #         )
        #     )

        # for selection_mark in page.selection_marks:
        #     print(
        #         "...Selection mark is '{}' within bounding box '{}' and has a confidence of {}".format(
        #             selection_mark.state,
        #             format_polygon(selection_mark.polygon),
        #             selection_mark.confidence,
        #         )
        #     )

    # for table_idx, table in enumerate(result.tables):
    #     print(
    #         "Table # {} has {} rows and {} columns".format(
    #             table_idx, table.row_count, table.column_count
    #         )
    #     )
    #     for region in table.bounding_regions:
    #         print(
    #             "Table # {} location on page: {} is {}".format(
    #                 table_idx,
    #                 region.page_number,
    #                 format_polygon(region.polygon),
    #             )
    #         )
    #     for cell in table.cells:
    #         print(
    #             "...Cell[{}][{}] has content '{}'".format(
    #                 cell.row_index,
    #                 cell.column_index,
    #                 cell.content,
    #             )
    #         )
    #         for region in cell.bounding_regions:
    #             print(
    #                 "...content on page {} is within bounding box '{}'\n".format(
    #                     region.page_number,
    #                     format_polygon(region.polygon),
    #                 )
    #             )
    # print("----------------------------------------")
    print(extracted_text)
    return extracted_text


def extract_general_document(url):
    try:
        document_analysis_client = DocumentAnalysisClient(endpoint=endpoint, credential=AzureKeyCredential(key))

        poller = document_analysis_client.begin_analyze_document_from_url(
                "prebuilt-document", url)
        result = poller.result()
        
        extracted_text = ""

        for page in result.pages:
            for _, line in enumerate(page.lines):
                extracted_text += line.content + " "
    
        return extracted_text
    except Exception as e:
        print("Error:", e)
        return str(e)


if __name__ == "__main__":
    analyze_general_documents()