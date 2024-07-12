import React, { useState, useEffect } from "react";
import { Model } from "survey-core";
import { SurveyPDF } from "survey-pdf";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";
import "./index.css";
import { json } from "./json";

function SurveyComponent() {
  const [clienteValue, setClienteValue] = useState("");

  useEffect(() => {
    const element = document.querySelector('input[aria-label="Cliente"]');
    if (element) {
      setClienteValue(element.value);
    } else {
      console.error('Elemento com aria-label="Cliente" não encontrado');
    }
  }, []); 

  const survey = new Model(json);

  survey.addNavigationItem({
    id: "survey_save_as_file",
    title: "Save as PDF",
    visibleIndex: 50,
    action: () => {
      saveSurveyToPdf(clienteValue + ".pdf", survey);
    },
  });

  survey.data = {
    qualities: {
      affordable: 3,
      "does-what-it-claims": 4,
      "better-than-others": 3,
      "easy-to-use": 5,
    },
    "satisfaction-score": 4,
    recommend: 5,
    suggestions: "24/7 support would help a lot.",
    "price-comparison": "Not sure",
    "current-price": "correct",
    "price-limits": {
      highest: 450,
      lowest: 200,
    },
    email: "john.doe@example.com",
  };
  survey.applyTheme(SurveyTheme.DefaultDark);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });

  return <Survey model={survey} />;
}

function createSurveyPdfModel(surveyModel) {
  const pdfWidth =
    !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
  const pdfHeight =
    !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
  const options = {
    fontSize: 14,
    margins: {
      left: 10,
      right: 10,
      top: 10,
      bot: 10,
    },
    format: [pdfWidth, pdfHeight],
  };
  const surveyPDF = new SurveyPDF(json, options);
  if (surveyModel) {
    surveyPDF.data = surveyModel.data;
  }
  return surveyPDF;
}

function saveSurveyToPdf(filename, surveyModel) {
  createSurveyPdfModel(surveyModel).save(filename);
}

export default SurveyComponent;
