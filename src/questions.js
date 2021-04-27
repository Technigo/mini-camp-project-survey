const questions = [
  {
    title: '1. What is your gender?',
    short: 'gender',
    type: 'radio',
    options: [
      {
        value: 'male',
        label: 'Male',
        result: 'mr'
      },
      {
        value: 'female',
        label: 'Female',
        result: 'ms'
      },
      {
        value: 'other',
        label: 'Who cares?',
        result: ''
      }
    ]
  },
  {
    title: '2. What is your gaming experience?',
    short: 'level',
    type: 'slider',
    options: [
      {
        value: 0,
        label: 'None',
        result: 'AFK'
      },
      {
        value: 1,
        label: 'Very little',
        result: 'Camper'
      },
      {
        value: 2,
        label: 'Some',
        result: 'Gr1nd'
      },
      {
        value: 3,
        label: 'Average',
        result: 'Sn1per'
      },
      {
        value: 4,
        label: 'Experienced',
        result: 'B0ss'
      },
      {
        value: 5,
        label: 'Expert',
        result: 'Sp33drunner'
      }
    ]
  },
  {
    title: '3. What is your current mood?',
    short: 'mood',
    type: 'radio',
    options: [
      {
        value: 'angry',
        label: 'Angry',
        result: 'W0lf'
      },
      {
        value: 'calm',
        label: 'Calm',
        result: 'Cat'
      },
      {
        value: 'energetic',
        label: 'Energetic',
        result: 'D0g'
      },
      {
        value: 'proud',
        label: 'Proud',
        result: 'Eagl3'
      },
      {
        value: 'tired',
        label: 'Tired',
        result: 'sl0th'
      },
      {
        value: 'shy',
        label: 'Shy',
        result: 'Bamb1'
      },
      {
        value: 'hungry',
        label: 'Hungry',
        result: 'Bear'
      }
    ]
  }
]

export default questions;