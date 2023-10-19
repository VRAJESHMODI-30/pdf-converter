import React, { useEffect } from "react";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
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
});

const PDFFile = () => {
  const content = [
    {
      style: styles.title1,
      text: "Job Title: Customer Service Representative",
      img: false,
    },
    {
      style: styles.title2,
      text: "Location: [City, State]",
      img: false,
    },
    {
      style: styles.listHead,
      text: "About Company:",
      img: false,
    },
    {
      style: styles.list,
      text: "[Company Name] is a leading provider of [describe the industry or products/services the company specializes in]. We are committed to delivering exceptional customer service and ensuring customer satisfaction. Our team is dedicated to providing top-notch support to our clients and creating a positive experience. Join our dynamic and customer-centric company to be part of a team that values excellence and teamwork.",
      img: false,
    },
    {
      style: styles.br,
      text: "",
      img: false,
    },
    {
      style: styles.listHead,
      text: "Responsibilities:",
      img: false,
    },
    {
      style: styles.list,
      text: "1. Customer Support: Providing first-level support to customers through various communication channels, including phone, email, and chat.",
      img: false,
    },
    {
      style: styles.list,
      text: "2. Issue Resolution: Effectively resolving customer inquiries, concerns, or issues while maintaining a high level of professionalism and customer focus.",
      img: false,
    },
    {
      style: styles.list,
      text: "3. Product Knowledge: Gaining an in-depth understanding of our products/services to provide accurate information and guidance to customers.",
      img: false,
    },
    {
      style: styles.list,
      text: "4. Record Keeping: Accurately documenting customer interactions and maintaining detailed records of inquiries, comments, and resolutions.",
      img: false,
    },
    {
      style: styles.list,
      text: "5. Feedback and Improvement: Gathering customer feedback and sharing insights with the team to contribute to continuous service improvement.",
      img: false,
    },
    {
      style: styles.list,
      text: "6. Team Collaboration: Collaborating with colleagues and other departments to ensure the smooth resolution of customer issues and inquiries.",
      img: false,
    },
    {
      style: styles.list,
      text: "7. Compliance: Adhering to company policies and procedures, ensuring compliance with quality standards, and maintaining confidentiality of customer information.",
      img: false,
    },
    {
      style: styles.br,
      text: "",
      img: false,
    },
    {
      style: styles.listHead,
      text: "Role:",
      img: false,
    },
    {
      style: styles.list,
      text: "The Customer Service Representative role at [Company Name] is a vital position that plays a key role in delivering exceptional customer experiences.",
      img: false,
    },
    {
      style: styles.list,
      text: "You will be the primary point of contact for customers and will have the opportunity to make a positive impact on their overall satisfaction with our products/services.",
      img: false,
    },
    {
      style: styles.list,
      text: "This role requires excellent communication skills, problem-solving abilities, and a strong commitment to customer service.",
      img: false,
    },
    {
      style: styles.list,
      text: "If you are passionate about helping customers, have a friendly and approachable demeanor, and want to be part of a company that values its employees, we encourage you to apply for this exciting opportunity.",
      img: false,
    },
    {
      style: styles.list,
      text: "[Company Name] is an equal opportunity employer and welcomes candidates from diverse backgrounds to join our team.",
      img: false,
    },
    {
      style: styles.listHead,
      text: "Responsibilities:",
      img: false,
    },
    {
      style: styles.list,
      text: "1. Customer Support: Providing first-level support to customers through various communication channels, including phone, email, and chat.",
      img: false,
    },
    {
      style: styles.list,
      text: "2. Issue Resolution: Effectively resolving customer inquiries, concerns, or issues while maintaining a high level of professionalism and customer focus.",
      img: false,
    },
    {
      style: styles.list,
      text: "3. Product Knowledge: Gaining an in-depth understanding of our products/services to provide accurate information and guidance to customers.",
      img: false,
    },
    {
      style: styles.list,
      text: "4. Record Keeping: Accurately documenting customer interactions and maintaining detailed records of inquiries, comments, and resolutions.",
      img: false,
    },
    {
      style: styles.list,
      text: "5. Feedback and Improvement: Gathering customer feedback and sharing insights with the team to contribute to continuous service improvement.",
      img: false,
    },
    {
      style: styles.list,
      text: "6. Team Collaboration: Collaborating with colleagues and other departments to ensure the smooth resolution of customer issues and inquiries.",
      img: false,
    },
    {
      style: styles.list,
      text: "7. Compliance: Adhering to company policies and procedures, ensuring compliance with quality standards, and maintaining confidentiality of customer information.",
      img: false,
    },
    {
      style: styles.br,
      text: "",
      img: false,
    },
    {
      style: styles.listHead,
      text: "Role:",
      img: false,
    },
    {
      style: styles.list,
      text: "The Customer Service Representative role at [Company Name] is a vital position that plays a key role in delivering exceptional customer experiences.",
      img: false,
    },
    {
      style: styles.list,
      text: "You will be the primary point of contact for customers and will have the opportunity to make a positive impact on their overall satisfaction with our products/services.",
      img: false,
    },
    {
      style: styles.list,
      text: "This role requires excellent communication skills, problem-solving abilities, and a strong commitment to customer service.",
      img: false,
    },
    {
      style: styles.list,
      text: "If you are passionate about helping customers, have a friendly and approachable demeanor, and want to be part of a company that values its employees, we encourage you to apply for this exciting opportunity.",
      img: false,
    },
    {
      style: styles.list,
      text: "[Company Name] is an equal opportunity employer and welcomes candidates from diverse backgrounds to join our team.",
      img: false,
    },
    {
      style: styles.listHead,
      text: "Responsibilities:",
      img: false,
    },
    {
      style: styles.list,
      text: "1. Customer Support: Providing first-level support to customers through various communication channels, including phone, email, and chat.",
      img: false,
    },
    {
      style: styles.list,
      text: "2. Issue Resolution: Effectively resolving customer inquiries, concerns, or issues while maintaining a high level of professionalism and customer focus.",
      img: false,
    },
    {
      style: styles.list,
      text: "3. Product Knowledge: Gaining an in-depth understanding of our products/services to provide accurate information and guidance to customers.",
      img: false,
    },
    {
      style: styles.list,
      text: "4. Record Keeping: Accurately documenting customer interactions and maintaining detailed records of inquiries, comments, and resolutions.",
      img: false,
    },
    {
      style: styles.list,
      text: "5. Feedback and Improvement: Gathering customer feedback and sharing insights with the team to contribute to continuous service improvement.",
      img: false,
    },
    {
      style: styles.list,
      text: "6. Team Collaboration: Collaborating with colleagues and other departments to ensure the smooth resolution of customer issues and inquiries.",
      img: false,
    },
    {
      style: styles.list,
      text: "7. Compliance: Adhering to company policies and procedures, ensuring compliance with quality standards, and maintaining confidentiality of customer information.",
      img: false,
    },
    {
      style: styles.br,
      text: "",
      img: false,
    },
    {
      style: styles.listHead,
      text: "Role:",
      img: false,
    },
    {
      style: styles.list,
      text: "The Customer Service Representative role at [Company Name] is a vital position that plays a key role in delivering exceptional customer experiences.",
      img: false,
    },
    {
      style: styles.list,
      text: "You will be the primary point of contact for customers and will have the opportunity to make a positive impact on their overall satisfaction with our products/services.",
      img: false,
    },
    {
      style: styles.list,
      text: "This role requires excellent communication skills, problem-solving abilities, and a strong commitment to customer service.",
      img: false,
    },
    {
      style: styles.list,
      text: "If you are passionate about helping customers, have a friendly and approachable demeanor, and want to be part of a company that values its employees, we encourage you to apply for this exciting opportunity.",
      img: false,
    },
    {
      style: styles.list,
      text: "[Company Name] is an equal opportunity employer and welcomes candidates from diverse backgrounds to join our team.",
      img: false,
    },
  ];

  const pageSize = 470;

  let currentPage = 0;
  let remainingContent = content;
  let pages = [];

  while (remainingContent.length > 0) {
    currentPage++;

    const contentForPage = remainingContent.splice(0, pageSize / 20);

    const page = (
      <Page key={currentPage} style={styles.body} size="A4">
        {currentPage == 1 ? (
          <Text style={styles.header} fixed>
            Company Logo Here...
          </Text>
        ) : null}
        {contentForPage.map((ele, idx) => (
          <Text key={idx} style={ele.style}>
            {ele.text}
          </Text>
        ))}
        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    );

    pages.push(page);
  }

  return <Document>{pages}</Document>;
};

export default PDFFile;
