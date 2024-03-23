from cnocr import CnOcr

img_fp = '/Users/habib/Documents/idify/pysrc/img/sample_id_1.jpeg'
ocr = CnOcr()
out = ocr.ocr_for_single_line(img_fp)
print(out)