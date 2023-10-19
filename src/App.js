import React, { useState } from "react";
import "./App.css";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  const jdString =
    "Job Title: Customer Service Representative\nLocation: [City, State]\nAbout Company:\n[Company Name] is a leading provider of [describe the industry or products/services the company specializes in]. We are committed to delivering exceptional customer service and ensuring customer satisfaction. Our team is dedicated to providing top-notch support to our clients and creating a positive experience. Join our dynamic and customer-centric company to be part of a team that values excellence and teamwork.\nResponsibilities:\nCustomer Support: Providing first-level support to customers through various communication channels, including phone, email, and chat.\nIssue Resolution: Effectively resolving customer inquiries, concerns, or issues while maintaining a high level of professionalism and customer focus.\nProduct Knowledge: Gaining an in-depth understanding of our products/services to provide accurate information and guidance to customers.\nRecord Keeping: Accurately documenting customer interactions and maintaining detailed records of inquiries, comments, and resolutions.\nFeedback and Improvement: Gathering customer feedback and sharing insights with the team to contribute to continuous service improvement.\nTeam Collaboration: Collaborating with colleagues and other departments to ensure the smooth resolution of customer issues and inquiries.\nCompliance: Adhering to company policies and procedures, ensuring compliance with quality standards, and maintaining confidentiality of customer information.\nRole:\nThe Customer Service Representative role at [Company Name] is a vital position that plays a key role in delivering exceptional customer experiences.\nYou will be the primary point of contact for customers and will have the opportunity to make a positive impact on their overall satisfaction with our products/services.\nThis role requires excellent communication skills, problem-solving abilities, and a strong commitment to customer service. If you are passionate about helping customers, have a friendly and approachable demeanor, and want to be part of a company that values its employees, we encourage you to apply for this exciting opportunity.\n[Company Name] is an equal opportunity employer and welcomes candidates from diverse backgrounds to join our team.";

  const convertJDString = (jdString) => {
    const styles = {
      body: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 30,
      },
      title1: {
        fontSize: 10,
        marginTop: 40,
        paddingBottom: 20,
        borderBottom: 0.5,
      },
      title2: {
        fontSize: 10,
        marginTop: 20,
        paddingBottom: 20,
        borderBottom: 0.5,
      },
      listHead: {
        fontSize: 15,
        marginTop: 20,
        paddingBottom: 5,
        fontWeight: "bold",
      },
      list: {
        fontSize: 10,
        marginTop: 5,
      },
      br: {
        marginTop: 20,
        borderBottom: 0.5,
      },
      content: {
        fontSize: 10,
        marginTop: 20,
        paddingBottom: 20,
        borderBottom: 0.5,
      },
      normal: {
        fontSize: 10,
        marginTop: 20,
        paddingBottom: 20,
      },
      header: {
        position: "absolute",
        top: 30,
        left: 30,
        fontSize: 12,
        color: "grey",
      },
      footer: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
      },
    };
    const lines = jdString.split("\n");
    const content = [];
    let currentStyle = styles.list;
    let responsibilitiesFound = true;

    for (let line of lines) {
      line = line.trim();
      if (line.startsWith("Job Title:")) {
        currentStyle = styles.title1;
      } else if (line.startsWith("Location:")) {
        currentStyle = styles.title2;
      } else if (line.startsWith("About Company:")) {
        currentStyle = styles.listHead;
      } else if (line.startsWith("Responsibilities:")) {
        currentStyle = styles.listHead;
      } else if (line.startsWith("Role:")) {
        currentStyle = styles.listHead;
      } else if (line === "") {
        currentStyle = styles.br;
      }

      if (responsibilitiesFound) {
        content.push({
          style: currentStyle,
          text: line,
        });
      }
    }
    console.log(content);
    return content;
  };
  return (
    <div className="App">
      DOWNLOAD PDF
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
        {({ loading }) =>
          loading ? (
            <button className="btn btn-primary">Loading Document...</button>
          ) : (
            <button className="btn btn-primary">Download</button>
          )
        }
      </PDFDownloadLink>
      <div
        className="btn btn-primary mt-2"
        onClick={() => convertJDString(jdString)}
      >
        HERE
      </div>
    </div>
  );
}

export default App;
