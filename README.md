# PosMalaysiaAssessment

This repository contains solutions for both **API Testing** and **UI Test Automation** tasks. Below are the details for each question in the assessment.

---

## **Question 1 – API Testing**

### **Objective**
The objective of this question is to build a **Postman Collection** that tests an API. While the API was not provided directly, the goal was to figure out the related API based on the functionality described.

### **Steps**
1. **Identify API:** Based on the given instructions, I identified the API related to calculating shipment quotes.
2. **Build Postman Collection:** I created the Postman collection with appropriate requests.
3. **Export and Commit:** After building the collection, I exported the Postman Collection and committed it to this repository.

### **Postman Collection**
You can find the Postman collection file `Pos Malaysia Assessment.postman_collection.json` in this repository, which includes all the API requests.

## Running the Postman Collection

To run the Postman collection, follow these steps:

1. **Install Postman**:
   If you don’t already have Postman, download and install it from [here](https://www.postman.com/downloads/).

2. **Download the Postman Collection**:
   - Download the collection file from the repository. The file name is `Pos Malaysia Assessment.postman_collection.json`.

3. **Import the Collection into Postman**:
   - Open Postman.
   - Click on the **Import** button in the top left corner.
   - Choose the **File** tab and select the downloaded `Pos Malaysia Assessment.postman_collection.json` file.
   - Click **Open** to import the collection into Postman.

4. **Run the Collection**:
   - After importing the collection, select it from the left sidebar.
   - To execute the collection, click on the **Run** button on the top right.

5. **Viewing Results**:
   - Once the collection runs, you will see the results for each request in the "Runner" tab.

---

## **Question 2 – Test Automation**

### **Objective**
For this task, the goal was to write an automated test using a UI automation tool, **Cypress**, to verify the shipment quote calculation functionality on a website.

### **Test Case 1: Verify user can calculate the shipment quote from Malaysia to India.**
- **Step 1:** Navigate to the [Pos Malaysia rate calculator page](https://pos.com.my/send/ratecalculator).
- **Step 2:** Enter “Malaysia” as the "From" country and “35600” as the postcode.
- **Step 3:** Enter “India” as the "To" country and leave the postcode empty.
- **Step 4:** Enter "1" as the shipment weight.
- **Step 5:** Click "Calculate" and verify that multiple quotes and shipment options are displayed.

### **Test Automation Framework**
- **Tool Used:** Cypress
- **Scripting Language:** JavaScript

### **How to Set Up and Run the Test**

Follow these steps to set up and run the automated test locally:

#### **Prerequisites**
Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Cypress](https://www.cypress.io/) (installation instructions below)

#### **Install Dependencies**
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Run the Test
    Open Cypress Test Runner:
    ```bash
    npx cypress open
    ```
    This will open the Cypress Test Runner where you can choose to run the test case interactively.

4. To run the test in headless mode (without the GUI):
    ```bash
    npx cypress run
    ```
