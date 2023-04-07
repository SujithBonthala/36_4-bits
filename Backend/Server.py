from flask import Flask,request,Response
from flask_cors import CORS
from flask import jsonify
import os
import pandas as pd
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt
import io
import base64

app = Flask(__name__)
CORS(app)

@app.route("/member")
def member():
    l=[90,80,70]
    return jsonify(results = l)


@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    filename = file.filename
    file.save(os.path.join('E:/Studies/DotSlash/dot/src/Uploads', filename))
    return {'message': 'File uploaded successfully'}

@app.route('/image1')
def display_image1():
    df_scores = pd.read_csv('E:/Studies/DotSlash/dot/src/Uploads/DotSlash_Scores_2.csv')
    df_avg = df_scores.groupby(['Year', 'Course'])['Score'].mean().reset_index()
    sns.barplot(data=df_avg, x='Year', y='Score', hue='Course')
    fig, ax = plt.subplots()
    plt.show()
    output = io.BytesIO()
    fig.savefig(output, format='png')
    output.seek(0)

    # Encode file-like object to base64 format
    img_base64 = base64.b64encode(output.getvalue()).decode('ascii')

    # Return base64-encoded image as JSON response
    return jsonify({'image': img_base64})




if __name__=="__main__":
    app.run(debug=True)
