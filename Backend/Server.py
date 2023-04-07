from flask import Flask
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)
CORS(app)

@app.route("/member")
def member():
    l=[90,80,70]
    return jsonify(results = l)

@app.route("/csvp")
def process_csv():
    

if __name__=="__main__":
    app.run(debug=True)
