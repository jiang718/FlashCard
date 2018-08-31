const cardData = {
  library: [
    {
      type: "cardCategory",
      cardCollectionName: "Art",
      cardCollectionContent: [
        {
          type: "cardFolder",
          cardCollectionName: "Music",
          cardCollectionContent: [
            {
              type: "cardSet",
              cardCollectionName: "Music Theory",
              cardCollectionContent: [
                {
                  term: "music theory 1",
                  definition: "music theory 1 def"
                }
              ]
            }
          ]
        },
        {
          type: "cardFolder",
          cardCollectionName: "Painting",
          cardCollectionContent: []
        }
      ]
    },
    {
      type: "cardCategory",
      cardCollectionName: "Technology",
      cardCollectionContent: [
        {
          type: "cardFolder",
          cardCollectionName: "Computer Science",
          cardCollectionContent: [
            {
              type: "cardSet",
              cardCollectionName: "Software Engineering",
              cardCollectionContent: [
                {
                  term: "FrontEnd",
                  definition: "FrontEnd def"
                }
              ]
            }
          ]
        },
        {
          type: "cardFolder",
          cardCollectionName: "Informatic Technology",
          cardCollectionContent: []
        }
      ]
    },
    {
      type: "cardCategory",
      cardCollectionName: "Science",
      cardCollectionContent: [
        {
          type: "cardFolder",
          cardCollectionName: "Physics",
          cardCollectionContent: [
            {
              type: "cardSet",
              cardCollectionName: "Quantum Physics",
              cardCollectionContent: [
                {
                  term: "quantum",
                  definition: "quantum def"
                }
              ]
            }
          ]
        },
        {
          type: "cardFolder",
          cardCollectionName: "Biology",
          cardCollectionContent: []
        },
        {
          type: "cardFolder",
          cardCollectionName: "Chemistry",
          cardCollectionContent: []
        }
      ]
    }
  ]
};

export default cardData;
