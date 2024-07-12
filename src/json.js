export const json = {
  locale: "pt-br",
  title: "Vistoria de Equipamentos",
  logo: "",
  logoHeight: "100px",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "multipletext",
          name: "question1",
          title: {
            "pt-br": "Formulário",
          },
          items: [
            {
              name: "Cliente",
            },
            {
              name: "Acompanhante (vistoria)",
            },
            {
              name: "Endereço",
            },
            {
              name: "Projeto Nº",
            },
            {
              name: "AVCB Nº",
            },
            {
              name: "Validade do Documento",
            },
            {
              name: "Ocupação",
            },
            {
              name: "Pavimentos",
              inputType: "number",
            },
            {
              name: "Lotação Maxima",
              inputType: "number",
            },
          ],
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "matrix",
          name: "question4",
          title: {
            "pt-br": "Extintores",
          },
          columns: [
            {
              value: "Column 1",
              text: {
                "pt-br": "Conforme",
              },
            },
            {
              value: "Column 2",
              text: {
                "pt-br": "Recarga",
              },
            },
            {
              value: "Column 3",
              text: {
                "pt-br": "Novo",
              },
            },
            {
              value: "Column 4",
              text: {
                default: "Novo1",
                "pt-br": "Manutenção",
              },
            },
            {
              value: "Column 5",
              text: {
                default: "Novo2",
                "pt-br": "Local incorreto",
              },
            },
            {
              value: "Column 6",
              text: {
                default: "Novo3",
                "pt-br": "Não aplicável",
              },
            },
          ],
          rows: [
            {
              value: "Row 1",
              text: {
                "pt-br": "IIndicado em PT",
              },
            },
            {
              value: "Row 2",
              text: {
                "pt-br": "AP 10 lts",
              },
            },
            {
              value: "Row 3",
              text: {
                default: "AP 11 lts",
                "pt-br": "PQS 4KG",
              },
            },
            {
              value: "Row 4",
              text: {
                default: "AP 12 lts",
                "pt-br": "PQS 6KG",
              },
            },
            {
              value: "Row 5",
              text: {
                default: "AP 13 lts",
                "pt-br": "CO² 6KG",
              },
            },
            {
              value: "Row 6",
              text: {
                default: "AP 14 lts",
                "pt-br": "Sob roda",
              },
            },
            {
              value: "Row 7",
              text: {
                default: "AP 15 lts",
                "pt-br": "Sistema Bateria CO²",
              },
            },
            {
              value: "Row 8",
              text: {
                default: "AP 16 lts",
                "pt-br": "Espuma Mecânica",
              },
            },
            {
              value: "Row 9",
              text: {
                default: "AP 17 lts",
                "pt-br": "Espuma Química",
              },
            },
          ],
        },
        {
          type: "text",
          name: "question5",
          title: {
            "pt-br": "Considerações finais",
          },
        },
        {
          type: "file",
          name: "question6",
          title: {
            "pt-br": "Anexo",
          },
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "signaturepad",
          name: "question55",
        },
      ],
    },
  ],
  showProgressBar: "top",
  progressBarType: "questions",
  widthMode: "responsive",
  width: "864px",
};
