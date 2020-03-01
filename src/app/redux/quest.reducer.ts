import {Action} from "@ngrx/store";
import {AddQuest, QUEST_ACTION} from "./quest.action";

const initialState = {
  questions: [
    {
      id: 1,
      vote: 1,
      answer: 1,
      impressions: 8,
      title: 'Как правильно сравнить данные из двух CSV файлов? Отрисовка точек попадающих между графиками',
      disc: 'Cайт выдает ошибку Сайт выполнил переадресацию слишком много раз после переноса WordPress и постоянно обновляется по себе. Как это можно исправить и за чего такое. Первый раз с таким сталкиваюсь , обычно такой код очень хорошо работал',
      tags: ['html', 'css', 'css', 'css3', 'html5', 'scss'],
      date: new Date(),
      author: 'Daniel qwaqwaqwa',
      authorRating: 98
    },
    {
      id: 2,
      vote: 12,
      answer: 3,
      impressions: 18,
      title: 'Как перевести время в timestamp?',
      disc: 'Данный код генерит 10-знаковый timestamp. А мне нужно 16\n' +
        '\n' +
        'int unixTime = (int)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds;\n' +
        'Нашёл в инете код для операции преобразования 16-значного в timestamp\n' +
        '\n' +
        'var timestamp = 1582799824092200;\n' +
        'var epoch = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);\n' +
        'var myDate = epoch.AddMilliseconds(timestamp / 1000);',
      tags: ['C', 'C#'],
      date: new Date(),
      author: 'Dim04ka',
      authorRating: 298
    }
    ,
    {
      id: 3,
      vote: 22,
      answer: 13,
      impressions: 1,
      title: 'Как получить data attr к datalist(option)?',
      disc: 'нужно получить data id выбранной опции. Важно, значение в поле value могут дублироваться, но айди будут разные. Как это сделать?',
      tags: ['js', 'jquery'],
      date: new Date(),
      author: 'Olga',
      authorRating: 298
    }
    ,
    {
      id: 4,
      vote: 2,
      answer: 3,
      impressions: 1,
      title: 'Задача по структурам и функциям',
      disc: 'Суть задачи: создать и проинициализировать 3 структуры описываюшие автомобили. в структуре поля: наименование, скорость, год выпуска. Написать функцию которая будет определять максимальную скорость и выводить название и год выпуска авто с макс. скоростью. Написать функцию которая будет считать среднюю скорость для 3 автомобилей использую на вход массив структур. (потом массив указателей на структуры) Вызвать эти функции. и вывести в консоль результаты.\n' +
        '\n' +
        'Также для надо написать функцию инициализации структуры. и написать функцию которая будет инициализировать структуры с использованием предыдущей функции. (потом написать функцию которая будет инитить структуры и формировать массив структур, а еще потом массив указателей на структуры) Возникла проблема, я не могу нормально написать функции с использованием структуры, целый день сижу и не могу ничего придумать. Можете не писать код просто подскажите в каком направлении двигаться и что делать, а то я просто не могу придумать ничего',
      tags: ['функции', 'структуры'],
      date: new Date(),
      author: 'mariya',
      authorRating: 8
    },
    {
      id: 5,
      vote: 1,
      answer: 1,
      impressions: 8,
      title: 'Как правильно сравнить данные из двух CSV файлов? Отрисовка точек попадающих между графиками',
      disc: 'Cайт выдает ошибку Сайт выполнил переадресацию слишком много раз после переноса WordPress и постоянно обновляется по себе. Как это можно исправить и за чего такое. Первый раз с таким сталкиваюсь , обычно такой код очень хорошо работал',
      tags: ['html', 'css', 'css', 'css3', 'html5', 'scss'],
      date: new Date(),
      author: 'Daniel qwaqwaqwa',
      authorRating: 98
    },
    {
      id: 6,
      vote: 12,
      answer: 3,
      impressions: 18,
      title: 'Как перевести время в timestamp?',
      disc: 'Данный код генерит 10-знаковый timestamp. А мне нужно 16\n' +
        '\n' +
        'int unixTime = (int)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds;\n' +
        'Нашёл в инете код для операции преобразования 16-значного в timestamp\n' +
        '\n' +
        'var timestamp = 1582799824092200;\n' +
        'var epoch = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);\n' +
        'var myDate = epoch.AddMilliseconds(timestamp / 1000);',
      tags: ['C', 'C#'],
      date: new Date(),
      author: 'Dim04ka',
      authorRating: 298
    }
    ,
    {
      id: 7,
      vote: 22,
      answer: 13,
      impressions: 1,
      title: 'Как получить data attr к datalist(option)?',
      disc: 'нужно получить data id выбранной опции. Важно, значение в поле value могут дублироваться, но айди будут разные. Как это сделать?',
      tags: ['js', 'jquery'],
      date: new Date(),
      author: 'Olga',
      authorRating: 998
    }
    ,
    {
      id: 8,
      vote: 2,
      answer: 3,
      impressions: 1,
      title: 'Задача по структурам и функциям',
      disc: 'Суть задачи: создать и проинициализировать 3 структуры описываюшие автомобили. в структуре поля: наименование, скорость, год выпуска. Написать функцию которая будет определять максимальную скорость и выводить название и год выпуска авто с макс. скоростью. Написать функцию которая будет считать среднюю скорость для 3 автомобилей использую на вход массив структур. (потом массив указателей на структуры) Вызвать эти функции. и вывести в консоль результаты.\n' +
        '\n' +
        'Также для надо написать функцию инициализации структуры. и написать функцию которая будет инициализировать структуры с использованием предыдущей функции. (потом написать функцию которая будет инитить структуры и формировать массив структур, а еще потом массив указателей на структуры) Возникла проблема, я не могу нормально написать функции с использованием структуры, целый день сижу и не могу ничего придумать. Можете не писать код просто подскажите в каком направлении двигаться и что делать, а то я просто не могу придумать ничего',
      tags: ['функции', 'структуры'],
      date: new Date(),
      author: 'mariya',
      authorRating: 8
    }
  ],

  metka: [
    {
      title: 'javascript',
      numbers: '124'
    },
    {
      title: 'css',
      numbers: '44'
    },
    {
      title: 'html',
      numbers: '424'
    },
    {
      title: 'python',
      numbers: '190'
    },
    {
      title: 'jquery',
      numbers: '424'
    },
    {
      title: 'php',
      numbers: '34'
    },
    {
      title: 'java',
      numbers: '45'
    },
    {
      title: 'C++',
      numbers: '10'
    },
    {
      title: 'C#',
      numbers: '24'
    },
    {
      title: 'avg',
      numbers: '44'
    },
    {
      title: 'qt',
      numbers: '12'
    },
    {
      title: 'массивы',
      numbers: '190'
    },
    {
      title: 'алгоритм',
      numbers: '33'
    },
    {
      title: 'mysql',
      numbers: '31'
    },
    {
      title: 'верстка',
      numbers: '57'
    },
    {
      title: 'docker',
      numbers: '10'
    }
  ],

  znaks : [
    {
      name: 'kinder91',
      medal: 'silver',
      title: 'Информарованный'
    },
    {
      name: 'Lebovski',
      medal: 'gold',
      title: 'Годовалый'
    },
    {
      name: ' MoloF',
      medal: 'silver',
      title: ' Хороший ответ'
    },
    {
      name: 'Илья Слободян',
      medal: 'bronze',
      title: ' Промоутер'
    },
    {
      name: 'kinder91',
      medal: 'silver',
      title: 'Информарованный'
    },
    {
      name: 'Lebovski',
      medal: 'gold',
      title: 'Годовалый'
    },
    {
      name: ' MoloF',
      medal: 'silver',
      title: ' Хороший ответ'
    },
    {
      name: 'Илья Слободян',
      medal: 'bronze',
      title: ' Промоутер'
    },
    {
      name: 'kinder91',
      medal: 'silver',
      title: 'Информарованный'
    },
    {
      name: 'Lebovski',
      medal: 'gold',
      title: 'Годовалый'
    },
    {
      name: ' MoloF',
      medal: 'silver',
      title: ' Хороший ответ'
    },
    {
      name: 'Илья Слободян',
      medal: 'bronze',
      title: ' Промоутер'
    },
    {
      name: 'kinder91',
      medal: 'silver',
      title: 'Информарованный'
    },
    {
      name: 'Lebovski',
      medal: 'gold',
      title: 'Годовалый'
    },
    {
      name: ' MoloF',
      medal: 'silver',
      title: ' Хороший ответ'
    },
    {
      name: 'Илья Слободян',
      medal: 'bronze',
      title: ' Промоутер'
    },
    {
      name: 'kinder91',
      medal: 'silver',
      title: 'Информарованный'
    },
    {
      name: 'Lebovski',
      medal: 'silver',
      title: 'Годовалый'
    },
    {
      name: ' MoloF',
      medal: 'silver',
      title: ' Хороший ответ'
    },
    {
      name: 'Илья Слободян',
      medal: 'bronze',
      title: ' Промоутер'
    },
    {
      name: 'kinder91',
      medal: 'silver',
      title: 'Информарованный'
    },
    {
      name: 'Lebovski',
      medal: 'silver',
      title: 'Годовалый'
    },
    {
      name: ' MoloF',
      medal: 'silver',
      title: ' Хороший ответ'
    },
    {
      name: 'Илья Слободян',
      medal: 'bronze',
      title: ' Промоутер'
    }
  ]
}

export default function questReducer(state = initialState, action) {

  switch (action.type) {
    case QUEST_ACTION.ADD_QUEST:
      return {
        ...state,
        questions: [action.payload, ...state.questions]
      }
    case QUEST_ACTION.DELETE_QUEST:

      return {
        ...state,
        questions: [...state.questions.filter(el => el.id !== action.payload)]

      }


    default:
      return state;

  }
}

