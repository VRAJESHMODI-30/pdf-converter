// import React from "react";
// import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import logo from "./companyLogo.svg";

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 30,
//     paddingBottom: 30,
//     paddingHorizontal: 30,
//   },
//   title: {
//     fontSize: 10,
//     marginTop: 20,
//     paddingBottom:20,
//     borderBottom:0.5
//   },
//   listHead: {
//     fontSize: 15,
//     marginTop: 20,
//     paddingBottom:5,
//     fontWeight:'bold'
//   },
//   list: {
//     fontSize: 10,
//     marginTop: 5,
//   },
//   br: {
//     marginTop:20,
//   borderBottom:0.5
//   },
//   content: {
//     fontSize: 10,
//     marginTop: 20,
//     paddingBottom:20,
//    borderBottom:0.5
//   },
//   normal:{
//     fontSize:10,
//     marginTop:20,
//     paddingBottom:20
//   },
//   header: {
//     position: "absolute",
//     top:30,
//     left: 30,
//     fontSize: 12,
//     color: "grey",
//     marginBottom:30,
//   },
//   footer: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//   },
// });

// const PDFFile = () => {
//  const customer_support_responsibilities = [
//     "1. Customer Support: Providing first-level support to customers through various communication channels, including phone, email, and chat.",
//     "2. Issue Resolution: Effectively resolving customer inquiries, concerns, or issues while maintaining a high level of professionalism and customer focus.",
//     "3. Product Knowledge: Gaining an in-depth understanding of our products/services to provide accurate information and guidance to customers.",
//     "4. Record Keeping: Accurately documenting customer interactions and maintaining detailed records of inquiries, comments, and resolutions.",
//     "5. Feedback and Improvement: Gathering customer feedback and sharing insights with the team to contribute to continuous service improvement.",
//     "6. Team Collaboration: Collaborating with colleagues and other departments to ensure the smooth resolution of customer issues and inquiries.",
//     "7. Compliance: Adhering to company policies and procedures, ensuring compliance with quality standards, and maintaining confidentiality of customer information."
// ];

// const customer_service_representative_role = [
//   "The Customer Service Representative role at [Company Name] is a vital position that plays a key role in delivering exceptional customer experiences.",
//   "You will be the primary point of contact for customers and will have the opportunity to make a positive impact on their overall satisfaction with our products/services.",
//   "This role requires excellent communication skills, problem-solving abilities, and a strong commitment to customer service."
// ]


//   return (
//     <Document>
//       <Page style={{ ...styles.body, backgroundColor: "white" }}>
//         <Text style={styles.header} fixed>
//           Header Here
//         </Text>

//         <Text style={styles.title}>
//           Job Title: Customer Service Representative
//         </Text>

//         <Text style={styles.title}>
//         Location: [City, State]
//         </Text>

//       <Text style={styles.listHead}>
//       About Company:
//       </Text>

//       <Text style={styles.list}>
//       [Company Name] is a leading provider of [describe the industry or products/services the company specializes in]. We are committed to delivering exceptional customer service and ensuring customer satisfaction. Our team is dedicated to providing top-notch support to our clients and creating a positive experience. Join our dynamic and customer-centric company to be part of a team that values excellence and teamwork.
//       </Text>

//       <Text style={styles.br}>
//       </Text>

//       <Text style={styles.listHead}>
//       Responsibilities:
//       </Text>
//       {customer_support_responsibilities.map((ele,idx)=>(
//          <Text key={idx} style={styles.list}>
//             {ele}
//          </Text>
//       ))}

//       <Text style={styles.br}>
//       </Text>

//       <Text style={styles.listHead}>
//           Role:
//       </Text>

//       {customer_service_representative_role.map((ele,idx)=>(
//          <Text key={idx} style={styles.list}>
//             {ele}
//          </Text>
//       ))}

//       <Text style={styles.br}>
//       </Text>

//       <Text style={styles.normal}>
//       If you are passionate about helping customers, have a friendly and approachable demeanor, and want to be part of a company that values its employees, we encourage you to apply for this exciting opportunity.
//       </Text>

//       <Text style={styles.normal}>
//       [Company Name] is an equal opportunity employer and welcomes candidates from diverse backgrounds to join our team.
//       </Text>

//         <Text
//           style={styles.footer}
//           render={({ pageNumber, totalPages }) =>
//             `${pageNumber} / ${totalPages}`
//           }
//         />
//       </Page>
//     </Document>
//   );
// };

// export default PDFFile;


import React from "react";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    padding: 30,
  },
  content: {
    fontSize: 12,
    margin: 20,
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
    "Job Title: Customer Service Representative",
    "Location: [City, State]",
    "About Company:",
    "[Company Name] is a leading provider of [describe the industry or products/services the company specializes in]. We are committed to delivering exceptional customer service and ensuring customer satisfaction. Our team is dedicated to providing top-notch support to our clients and creating a positive experience. Join our dynamic and customer-centric company to be part of a team that values excellence and teamwork.",
    "Responsibilities:",
    "1. Customer Support: Providing first-level support to customers through various communication channels, including phone, email, and chat.",
    "2. Issue Resolution: Effectively resolving customer inquiries, concerns, or issues while maintaining a high level of professionalism and customer focus.",
    "3. Product Knowledge: Gaining an in-depth understanding of our products/services to provide accurate information and guidance to customers.",
    "4. Record Keeping: Accurately documenting customer interactions and maintaining detailed records of inquiries, comments, and resolutions.",
    "5. Feedback and Improvement: Gathering customer feedback and sharing insights with the team to contribute to continuous service improvement.",
    "6. Team Collaboration: Collaborating with colleagues and other departments to ensure the smooth resolution of customer issues and inquiries.",
    "7. Compliance: Adhering to company policies and procedures, ensuring compliance with quality standards, and maintaining confidentiality of customer information.",
    "Role:",
    "The Customer Service Representative role at [Company Name] is a vital position that plays a key role in delivering exceptional customer experiences.",
    "You will be the primary point of contact for customers and will have the opportunity to make a positive impact on their overall satisfaction with our products/services.",
    "This role requires excellent communication skills, problem-solving abilities, and a strong commitment to customer service.",
    "If you are passionate about helping customers, have a friendly and approachable demeanor, and want to be part of a company that values its employees, we encourage you to apply for this exciting opportunity.",
    "[Company Name] is an equal opportunity employer and welcomes candidates from diverse backgrounds to join our team.",
    "Job Title: Customer Service Representative",
    "Location: [City, State]",
    "About Company:",
    "[Company Name] is a leading provider of [describe the industry or products/services the company specializes in]. We are committed to delivering exceptional customer service and ensuring customer satisfaction. Our team is dedicated to providing top-notch support to our clients and creating a positive experience. Join our dynamic and customer-centric company to be part of a team that values excellence and teamwork.",
    "Responsibilities:",
    "1. Customer Support: Providing first-level support to customers through various communication channels, including phone, email, and chat.",
    "2. Issue Resolution: Effectively resolving customer inquiries, concerns, or issues while maintaining a high level of professionalism and customer focus.",
    "3. Product Knowledge: Gaining an in-depth understanding of our products/services to provide accurate information and guidance to customers.",
    "4. Record Keeping: Accurately documenting customer interactions and maintaining detailed records of inquiries, comments, and resolutions.",
    "5. Feedback and Improvement: Gathering customer feedback and sharing insights with the team to contribute to continuous service improvement.",
    "6. Team Collaboration: Collaborating with colleagues and other departments to ensure the smooth resolution of customer issues and inquiries.",
    "7. Compliance: Adhering to company policies and procedures, ensuring compliance with quality standards, and maintaining confidentiality of customer information.",
    "Role:",
    "The Customer Service Representative role at [Company Name] is a vital position that plays a key role in delivering exceptional customer experiences.",
    "You will be the primary point of contact for customers and will have the opportunity to make a positive impact on their overall satisfaction with our products/services.",
    "This role requires excellent communication skills, problem-solving abilities, and a strong commitment to customer service.",
    "If you are passionate about helping customers, have a friendly and approachable demeanor, and want to be part of a company that values its employees, we encourage you to apply for this exciting opportunity.",
    "[Company Name] is an equal opportunity employer and welcomes candidates from diverse backgrounds to join our team.",
    "Job Title: Customer Service Representative",
    "Location: [City, State]",
    "About Company:",
    "[Company Name] is a leading provider of [describe the industry or products/services the company specializes in]. We are committed to delivering exceptional customer service and ensuring customer satisfaction. Our team is dedicated to providing top-notch support to our clients and creating a positive experience. Join our dynamic and customer-centric company to be part of a team that values excellence and teamwork.",
    "Responsibilities:",
    "1. Customer Support: Providing first-level support to customers through various communication channels, including phone, email, and chat.",
    "2. Issue Resolution: Effectively resolving customer inquiries, concerns, or issues while maintaining a high level of professionalism and customer focus.",
    "3. Product Knowledge: Gaining an in-depth understanding of our products/services to provide accurate information and guidance to customers.",
    "4. Record Keeping: Accurately documenting customer interactions and maintaining detailed records of inquiries, comments, and resolutions.",
    "5. Feedback and Improvement: Gathering customer feedback and sharing insights with the team to contribute to continuous service improvement.",
    "6. Team Collaboration: Collaborating with colleagues and other departments to ensure the smooth resolution of customer issues and inquiries.",
    "7. Compliance: Adhering to company policies and procedures, ensuring compliance with quality standards, and maintaining confidentiality of customer information.",
    "Role:",
    "The Customer Service Representative role at [Company Name] is a vital position that plays a key role in delivering exceptional customer experiences.",
    "You will be the primary point of contact for customers and will have the opportunity to make a positive impact on their overall satisfaction with our products/services.",
    "This role requires excellent communication skills, problem-solving abilities, and a strong commitment to customer service.",
    "If you are passionate about helping customers, have a friendly and approachable demeanor, and want to be part of a company that values its employees, we encourage you to apply for this exciting opportunity.",
    "[Company Name] is an equal opportunity employer and welcomes candidates from diverse backgrounds to join our team.",
    "Job Title: Customer Service Representative",
    "Location: [City, State]",
    "About Company:",
    "[Company Name] is a leading provider of [describe the industry or products/services the company specializes in]. We are committed to delivering exceptional customer service and ensuring customer satisfaction. Our team is dedicated to providing top-notch support to our clients and creating a positive experience. Join our dynamic and customer-centric company to be part of a team that values excellence and teamwork.",
    "Responsibilities:",
    "1. Customer Support: Providing first-level support to customers through various communication channels, including phone, email, and chat.",
    "2. Issue Resolution: Effectively resolving customer inquiries, concerns, or issues while maintaining a high level of professionalism and customer focus.",
    "3. Product Knowledge: Gaining an in-depth understanding of our products/services to provide accurate information and guidance to customers.",
    "4. Record Keeping: Accurately documenting customer interactions and maintaining detailed records of inquiries, comments, and resolutions.",
    "5. Feedback and Improvement: Gathering customer feedback and sharing insights with the team to contribute to continuous service improvement.",
    "6. Team Collaboration: Collaborating with colleagues and other departments to ensure the smooth resolution of customer issues and inquiries.",
    "7. Compliance: Adhering to company policies and procedures, ensuring compliance with quality standards, and maintaining confidentiality of customer information.",
    "Role:",
    "The Customer Service Representative role at [Company Name] is a vital position that plays a key role in delivering exceptional customer experiences.",
    "You will be the primary point of contact for customers and will have the opportunity to make a positive impact on their overall satisfaction with our products/services.",
    "This role requires excellent communication skills, problem-solving abilities, and a strong commitment to customer service.",
    "If you are passionate about helping customers, have a friendly and approachable demeanor, and want to be part of a company that values its employees, we encourage you to apply for this exciting opportunity.",
    "[Company Name] is an equal opportunity employer and welcomes candidates from diverse backgrounds to join our team.",
  ];

  const pageSize = 550; // Set the height of each page

  // Initialize variables to keep track of content and page number
  let currentPage = 0;
  let remainingContent = content;
  let pages = [];

  while (remainingContent.length > 0) {
    currentPage++;

    // Get a portion of the content that fits on the page
    const contentForPage = remainingContent.splice(0, pageSize / 20);

    // Create a new page
    const page = (
      <Page key={currentPage} style={styles.body} size="A4">
        <Text style={styles.content}>{contentForPage.join("\n")}</Text>
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
