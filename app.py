from flask import Flask, render_template, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model from the .pkl file
model = joblib.load('model.pkl')

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/home')
def home():
    return render_template('bank.html')

@app.route('/home/riskanalysis', methods=['GET', 'POST'])
def riskanalysis():
    if request.method == 'POST':
        input_data = [request.form[f'input{i}'] for i in range(1, 28)]
        input_data = list(map(float, input_data))  # Convert input to float
        risk_level = model.predict([input_data])[0]

        if risk_level == 0:
            result = "CAN GIVE CREDIT"
        else:
            result = "DO NOT GIVE CREDIT"

        return jsonify({'risk_level': int(risk_level), 'result': result})

    return render_template('riskanalysis.html')

if __name__ == '__main__':
    app.run(debug=True)
