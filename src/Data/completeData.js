const completeData = [
    {
      name: 'Narva',
      latitude: 59.3776,
      longitude: 28.1901,
      description: 'Kõrgus merepinnast: 14m. '
    },
    {
      name: 'Pärnu',
      latitude: 58.3854,
      longitude: 24.4998,
      description: 'Kõrgus merepinnast: 4m. '
    },
    {
      name: 'Kohtla-Järve',
      latitude: 59.3985,
      longitude: 27.2736,
      description: 'Kõrgus merepinnast: 67m. '
    },
    {
      name: 'Tallinn',
      latitude: 59.4370,
      longitude: 24.7536,
      description: 'Pealinn. Kõrgus merepinnast: 40m. '
    },
    {
      name: 'Tartu',
      latitude: 58.3780,
      longitude: 26.7297,
      description: 'Kõrgus merepinnast: 65m. '
    },
    {
      name: 'Viljandi',
      latitude: 58.3637,
      longitude: 25.5909,
      description: 'Kõrgus merepinnast: 76m. '
    },
    {
      name: 'Rakvere',
      latitude: 59.3460,
      longitude: 26.3551,
      description: 'Kõrgus merepinnast: 72m. '
    },
    {
      name: 'Võru',
      latitude: 57.8437,
      longitude: 27.0147,
      description: 'Kõrgus merepinnast: 76m. '
    },
    {
      name: 'Kuressaare',
      latitude: 58.2481,
      longitude: 22.5034,
      description: 'Kõrgus merepinnast: 5m. '
    },
    {
      name: 'Valga',
      latitude: 57.7773,
      longitude: 26.0440,
      description: 'Kõrgus merepinnast: 53m. '
    },
    {
      name: 'Haapsalu',
      latitude: 58.9419,
      longitude: 23.5415,
      description: 'Kõrgus merepinnast: 10m. '
    },
    {
      name: 'Jõhvi',
      latitude: 59.3592,
      longitude: 27.4132,
      description: 'Kõrgus merepinnast: 56m. '
    },
    {
      name: 'Paide',
      latitude: 58.8855,
      longitude: 25.5570,
      description: 'Kõrgus merepinnast: 76m. '
    },
    {
      name: 'Kiviõli',
      latitude: 59.3519,
      longitude: 27.2781,
      description: 'Kõrgus merepinnast: 63m. '
    },
    {
      name: 'Tapa',
      latitude: 59.2601,
      longitude: 25.9663,
      description: 'Kõrgus merepinnast: 73m. '
    },
    {
      name: 'Põlva',
      latitude: 58.0609,
      longitude: 27.0595,
      description: 'Kõrgus merepinnast: 69m. '
    },
    {
      name: 'Saue',
      latitude: 59.3200,
      longitude: 24.5522,
      description: 'Kõrgus merepinnast: 40m. '
    },
    {
      name: 'Elva',
      latitude: 58.2219,
      longitude: 26.4199,
      description: 'Kõrgus merepinnast: 55m. '
    },
    {
      name: 'Tõrva',
      latitude: 58.0049,
      longitude: 25.9325,
      description: 'Kõrgus merepinnast: 71m. '
    },
    {
      name: 'Otepää',
      latitude: 58.0603,
      longitude: 26.4946,
      description: 'Kõrgus merepinnast: 136m. '
    },
    {
      name: 'Kärdla',
      latitude: 58.9978,
      longitude: 22.7494,
      description: 'Kõrgus merepinnast: 4m. '
    },
    {
      name: 'Mustvee',
      latitude: 58.8494,
      longitude: 26.9513,
      description: 'Kõrgus merepinnast: 43m. '
    },
    {
      name: 'Rapla',
      latitude: 58.9899,
      longitude: 24.7912,
      description: 'Kõrgus merepinnast: 62m. '
    },
    {
      name: 'Karksi-Nuia',
      latitude: 58.1032,
      longitude: 25.5636,
      description: 'Kõrgus merepinnast: 80m. '
    },
    {
      name: 'Paldiski',
      latitude: 59.3476,
      longitude: 24.0865,
      description: 'Kõrgus merepinnast: 11m. '
    },
    {
      name: 'Keila',
      latitude: 59.3032,
      longitude: 24.4151,
      description: 'Kõrgus merepinnast: 34m. '
    },
    {
      name: 'Tamsalu',
      latitude: 59.1567,
      longitude: 26.0848,
      description: 'Kõrgus merepinnast: 97m. '
    },
    {
      name: 'Jõgeva',
      latitude: 58.7464,
      longitude: 26.3947,
      description: 'Kõrgus merepinnast: 104m. '
    },
    {
      name: 'Türi',
      latitude: 58.8083,
      longitude: 25.3893,
      description: 'Kõrgus merepinnast: 58m. '
    },
    {
      name: 'Kunda',
      latitude: 59.4841,
      longitude: 26.5617,
      description: 'Kõrgus merepinnast: 30m. '
    },
    {
      name: 'Loksa',
      latitude: 59.5768,
      longitude: 25.7203,
      description: 'Kõrgus merepinnast: 5m. '
    },
    {
      name: 'Kohila',
      latitude: 59.1687,
      longitude: 24.7779,
      description: 'Kõrgus merepinnast: 34m. '
    },
    {
      name: 'Võhma',
      latitude: 58.8450,
      longitude: 25.5646,
      description: 'Kõrgus merepinnast: 77m. '
    },
    {
      name: 'Lihula',
      latitude: 58.6843,
      longitude: 23.8391,
      description: 'Kõrgus merepinnast: 7m. '
    },
    {
      name: 'Antsla',
      latitude: 57.8272,
      longitude: 26.5253,
      description: 'Kõrgus merepinnast: 94m. '
    },
    {
      name: 'Abja-Paluoja',
      latitude: 58.1294,
      longitude: 25.3496,
      description: 'Kõrgus merepinnast: 64m. '
    },
    {
      name: 'Põltsamaa',
      latitude: 58.6522,
      longitude: 25.9703,
      description: 'Kõrgus merepinnast: 93m. '
    },
    {
      name: 'Räpina',
      latitude: 58.0994,
      longitude: 27.4531,
      description: 'Kõrgus merepinnast: 42m. '
    },
    {
      name: 'Narva-Jõesuu',
      latitude: 59.4579,
      longitude: 28.0432,
      description: 'Kõrgus merepinnast: 3m. '
    },
    {
      name: 'Sindi',
      latitude: 58.3976,
      longitude: 24.6604,
      description: 'Kõrgus merepinnast: 12m. '
    },
    {
      name: 'Toila',
      latitude: 59.4178,
      longitude: 27.2431,
      description: 'Kõrgus merepinnast: 29m. '
    },
    {
      name: 'Kilingi-Nõmme',
      latitude: 58.1736,
      longitude: 24.9678,
      description: 'Kõrgus merepinnast: 44m. '
    },
    {
      name: 'Võsu',
      latitude: 59.5562,
      longitude: 26.0819,
      description: 'Kõrgus merepinnast: 7m. '
    },
    {
      name: 'Lihula',
      latitude: 58.6858,
      longitude: 23.8388,
      description: 'Kõrgus merepinnast: 7m. '
    },
    {
      name: 'Keri Saar',
      latitude: 59.6990,
      longitude: 25.0227,
      description: 'Kõrgus merepinnast: 2m. '
    },
  ];
  
  export default completeData;
  