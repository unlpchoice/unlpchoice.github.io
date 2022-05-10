// Requires jQuery

$(document).on('click','.js-menu_toggle.closed',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('closed').addClass('opened');

	$('.side_menu').css({ 'left':'0px' });

	var count = $('.list_item').length;
	$('.list_load').slideDown( (count*.6)*100 );
	$('.list_item').each(function(i){
		var thisLI = $(this);
		timeOut = 100*i;
		setTimeout(function(){
			thisLI.css({
				'opacity':'1',
				'margin-left':'-50'
			});
		},100*i);
	});
});

$(document).on('click','.js-menu_toggle.opened',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('opened').addClass('closed');

	$('.side_menu').css({ 'left':'-125px' });

	var count = $('.list_item').length;
	$('.list_item').css({
		'opacity':'0',
		'margin-left':'-50px'
	});
	$('.list_load').slideUp(300);
});

var $progressValue = 0;
var resultList=[];


const quizdata=[
  {
    question:"¿Cuáles son los huesos que forman parte de la fila posterior del tarso?",
    options:["Astrágalo, calcáneo, cuboides, Esfenoides.", "Cuboides, escafoides y Cuneiformes.", "Astrágalo, calcáneo", "Cuboides, escafoides y Astrágalo."],
    answer:"Astrágalo, calcáneo",
    category:1
  },
  {
      question:"Con respecto al oblicuo mayor, marque la opción correcta:",
      options:["La aponeurosis del oblicuo mayor se une con la del oblicuo menor y pasa por detrás del recto mayor.", "Esta inervado por el abdominogenital mayor y menor", "Los pilares interno y externo de la inserción pubiana dejan entre ellos un intervalo triangular que se denomina anillo inguinal superficial.", "Es el musculo más profundo del grupo de la pared anterolateral del abdomen."],
      answer:"Los pilares interno y externo de la inserción pubiana dejan entre ellos un intervalo triangular que se denomina anillo inguinal superficial.",
      category:1
    },
    {
      question:"Sobre el hueso fémur, decimos que la extremidad proximal es",
      options:["El fémur no presenta epífisis", "Aquella que se encuentra en la diáfisis femoral", "Aquella que se encuentra más alejada del eje medio del cuerpo", "Aquella que se encuentra más cercana al eje medio del cuerpo"],
      answer:"Aquella que se encuentra más cercana al eje medio del cuerpo",
      category:1
    },
    {
      question:"¿Cuál es la inervación del músculo Deltoides?",
      options:["El nervio mediano.", "El nervio radial.", "El nervio cubital.", "El nervio circunflejo."],
      answer:"El nervio circunflejo.",
      category:1
    },
    {
      question:"¿Qué es la cintilla ileopectínea?",
      options:["una cintilla dependiente de la aponeurosis del oblicuo externo (mayor)", "un engrosamiento de la aponeurosis del psoasilíaco", "una cintilla fibrosa que una la espina iliaca anteroinferior y el pubis", "una cintilla fibrosa que una la espina iliaca anterosuperior y el pubis"],
      answer:"un engrosamiento de la aponeurosis del psoasilíaco",
      category:1
    },
    {
      question:"Con que elementos vasculares y nerviosos se relaciona el Músculo Escaleno Anterior",
      options:["Nervio Neumogástrico, Plexo Braquial, arteria Carótida Primitiva y vena Yugular Interna.", ". Nervio Neumogástrico, Plexo Cervical, arteria Subclavia y Tronco Braquiocefálico venoso", "Nervio Frénico, Plexo Braquial, arteria y vena subclavia.", " Nervio Frénico, Plexo Braquial y Vasos Yugulares Externos."],
      answer:"Nervio Frénico, Plexo Braquial, arteria y vena subclavia.",
      category:1
    },
    {
      question:"Los orificios y conductos de 2do orden pertenecen:",
      options:["Se localizan en los 3 tipos de huesos", "No se localizan en ninguna de estas estructuras", "Se localizan exclusivamente en huesos planos", "Localizados en las diáfisis exclusivamente"],
      answer:"Se localizan en los 3 tipos de huesos",
      category:1
    },
    {
        question:"¿Cual de los siguientes músculos forma parte de la pared posterior de la axila?",
        options:["Pectoral menor", "Subescapular", "Coracobraquial", "Serrato mayor"],
        answer:"Subescapular",
        category:1
      },
      {
        question:"¿Cual es el musculo responsable (principal) de la eversión del pie?",
        options:["Tibial anterior (tibialis anterior)", "Peroneo lateral largo (peroneus longus)", "Peroneo anterior (peroneus tertius)", "Peroneo lateral corto (peroneus brevis)"],
        answer:"Peroneo lateral largo (peroneus longus)",
        category:1
      },
      {
        question:"Que ligamento se deber seccionar para ingresar desde dorsal al conducto raquideo?",
        options:["Ligamento vertebral común posterior", "Ligamento interespinoso", "Ligamento amarillo", "Ligamento vertebral común anterior"],
        answer:"Ligamento amarillo",
        category:1
      },
  {
    question:"Quien inerva al biceps?",
    options:["Cubital", "Mediano", "Radial", "Musculocutaneo"],
    answer:"Musculocutaneo",
    category:1
  },
  {
      question:"Los orificios y conductos de 3ro orden:",
      options:["Ubicados en todos los huesos, pero solo en superficies no articulares", "Ubicados solo en epífisis de huesos largos", "Ubicados solamente en huesos sesamoideos", "Ubicados en todos los huesos, pero solo en superficies articulares"],
      answer:"Ubicados en todos los huesos, pero solo en superficies no articulares",
      category:1
    },
    {
      question:"¿Qué músculo se inserta en la línea curva occipital superior?",
      options:["Estenocleidomastoideo", "Complexo mayor (semispinalis capitis)", "Complexo menor (longuissimus capitis)", "oblicuo posterior menor (obliquus capitis superior)"],
      answer:"Complexo mayor (semispinalis capitis)",
      category:1
    },
    {
      question:"¿Cómo se denominan de modo genérico a la articulación que no poseen movimiento?",
      options:["sinartrosis", "diartrosis", "artrosis", "anfiartrosis"],
      answer:"sinartrosis",
      category:1
    },
    {
      question:"¿Qué sucede cuando se contraen ambos esternocleidomastoideo simultáneamente?",
      options:["Se eleva el mentón", "Se gira la cabeza con dificultad hacia la derecha", "La cabeza no se mueve", "Se gira la cabeza con dificultad hacia la izquierda"],
      answer:"Se eleva el mentón",
      category:1
    },
    {
      question:"¿Que movimiento limitan los ligamentos cruzados de la rodilla?",
      options:["Extension", "Flexión", "Rotacion interna de la pierna", "Rotación externa de la pierna"],
      answer:"Rotacion interna de la pierna",
      category:1
    },
    {
      question:"Cual de estos músculos NO se insertan en el isquion",
      options:["Semimembranoso", "Semitendinoso", "Bíceps porción corta", "Bíceps porción largax"],
      answer:"Bíceps porción corta",
      category:1
    },
    {
        question:"¿Cual de estos huesos NO forma parte de la cara externa de las fosas nasales?",
        options:["Etmoides", "Esfenoides", "Vomer", "Cornete inferior"],
        answer:"Vomer",
        category:1
      },
      {
        question:"¿Cuáles son las inserciones laterales del omohioideo?",
        options:["Clavícula", "Hioides", "Acrómion", "Cerca de la escotadura coracoidea"],
        answer:"Cerca de la escotadura coracoideax",
        category:1
      },
      {
        question:"¿Qué función principal poseen los músculos de los canales espinales?",
        options:["Flexores de la columna.", "Rotadores de la columna.", "Permiten lateralizar la columna.", "Extensores de la columna."],
        answer:"Extensores de la columna.",
        category:1
      },
      {
          question:"Marque la opción correcta.",
          options:["El etmoides forma parte de la fosa craneal anterior.", "El lobulo frontal del cerebro apoya sobre la porción vertical del frontal", "El ala mayor del esfenoides forma parte de la fosa craneal posterior", "El occipital forma parte de la fosa craneal media"],
          answer:" El etmoides forma parte de la fosa craneal anterior.",
          category:1
        },
        {
            question:"Con respecto al músculo coracobraquial, señale la opción correcta:",
            options:["Su inserción proximal es en el acromion", "Esta inervado por el nervio musculocutáneo.", "Es abductor del brazo.", "Su inserción distal es en la cara posterolateral del humero"],
            answer:"Esta inervado por el nervio musculocutáneo.",
            category:1
          },
          {
            question:"¿Qué músculo forma el verdadero piso de la cavidad bucal?",
            options:["Músculo Geniohioideo.", "Músculo Milohioideo.", "Músculo Digástrico.", "Músculo Estilohioideo"],
            answer:"Músculo Milohioideo.",
            category:1
          },
          {
            question:"¿Dónde se inserta el serrato mayor?",
            options:["Borde interno del omóplato – 1° a 8° costilla", "Borde interno del omóplato - esternón", "Borde externo del omóplato – 1° a 8° costilla", "Clavícula – 1° a 3° costilla"],
            answer:"Borde interno del omóplato – 1° a 8° costilla",
            category:1
          },
          {
            question:"¿Cuál es el límite inferior del abdomen?",
            options:["Músculos Oblicuos del abdomen", "Músculos retroperitoneales", "Músculos inferiores", "Músculos del periné."],
            answer:"Músculos del periné.",
            category:1
          },
          {
            question:"¿Dónde se localiza el ligamento amarillo?",
            options:["Entre las apófisis espinosas", "Entre los cuerpos vertebrales", "Entre las apófisis transversas", "Entre las láminas vertebrales"],
            answer:"Entre las laminas vertebrales",
            category:1
          },
          {
            question:"¿Qué es una apófisis?",
            options:["Hace referencia a una epífisis", "Es un hueso wormiano", "Es un hueso sesamoideo", "Prolongación ósea"],
            answer:"Prolongación ósea",
            category:1
          },
          {
              question:"¿A qué hace referencia el termino proximal, en una estructura anatómica perteneciente a los miembros?",
              options:["Se refiere a la parte más alejada de su raíz", "Ninguna de las anteriores", "Se refiere a la parte media de la estructura", "Se refiere a la parte cercana de la raíz"],
              answer:"Se refiere a la parte cercana de la raíz",
              category:1
            },
            {
              question:"Una de las siguientes características distingue al coracobraquial del resto de los músculos del brazo.",
              options:["Es flexor del brazo", "Es atravesado por el nervio musculocutáneo", "Se inserta en el Cubito", "Es rotador externo del brazo"],
              answer:"Es atravesado por el nervio musculocutáneo",
              category:1
            },
            {
              question:"¿Cuáles son las inserciones superiores del trapecio?",
              options:["Arco posterior del atlas", " Línea semicircular inferior del occipital", "Protuberancia occipital interna", "Línea semicircular superior del occipital"],
              answer:" Línea semicircular superior del occipital",
              category:1
            },
        {
          question:"Con respecto a la articulación temporo mandibular marque la opción correcta.",
          options:["En la lateralidad de la mandíbula el condilo fijo no ejecuta ningún movimiento", "El eje de movimiento de descenso de la mandibula pasa por el condilo", "Se comporta funcionalmente como una enartrosis", "El ascenso de la mandibula es limitado por la tensión del ligamento lateralexterno"],
          answer:"Se comporta funcionalmente como una enartrosis",
          category:1
        },
        {
            question:"La clavícula es un ejemplo de hueso:",
            options:["Plano", "Corto", " Largo", "Sesamoideos"],
            answer:"Largo",
            category:1
          },
          {
            question:"Las inserciones del deltoides forma una línea contínua con un músculo localizado en el cuello. ¿Con cuál?",
            options:["Recto posterior mayor", "Complexo Mayor", "Redondo mayor", "Trapecio"],
            answer:"Trapecio",
            category:1
          },
          {
            question:"¿Cual de las siguientes acciones son mayormente producida por el trapecio?",
            options:["Descenso de los hombros", "Flexión de la cabeza", "Elevacion de hombros", "Rotación interna del brazo"],
            answer:"Elevacion de hombros",
            category:1
          },
          {
            question:"¿En qué pared de la órbita se encuentra la fosa lagrimal?",
            options:["En pared inferior.", "En la pared interna.", "En la pared externa.", "En la pared superior."],
            answer:"En la pared superior.",
            category:1
          },
          {
            question:"¿Cuáles son las inserciones distales del músculo braquial anterior?",
            options:["Cavidad sigmoidea menor del cúbito", "Cabeza del radio", "Apófisis coronoides del cúbito", "Epífisis inferior del húmero"],
            answer:"Apófisis coronoides del cúbito",
            category:1
          },
          {
            question:"Indique la respuesta correcta respecto al cóndilo temporal:",
            options:["Permite la articulación del hueso temporal con el hueso malar", "Forma parte de la articulación temporomandibular", "Contiene al agujero condíleo anterior", "Permite la articulación del cráneo con la columna vertebral "],
            answer:"Forma parte de la articulación temporomandibular",
            category:1
          },
          {
              question:"¿Cuál de los siguientes términos es sinónimos de un corte Axial?",
              options:[" Oblicuo", "Sagital ", "Coronal", "Transversal"],
              answer:"Transversal",
              category:1
            },
            {
              question:"¿Cómo se clasifica la articulación humero-cubital?",
              options:["Diartrosis - trocoide", "Diartrosis - troclear", "Anfiartrosis - sínfisis", "Diartrosis - artrodia"],
              answer:"Diartrosis - troclear",
              category:1
            },
            {
              question:"Uno de los siguientes elementos de encuentra en el espacio cubito carpiano:",
              options:["Ligamento triangular", "Arteria cubital", "Ligamento anular", "Ligamento cuadrado"],
              answer:"x",
              category:1
            }
            
    ];
/** Random shuffle questions **/
function shuffleArray(question){
   var shuffled=question.sort(function() {
    return .5 - Math.random();
 });
   return shuffled;
}

function shuffle(a) {
  for (var i = a.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    var _ref = [a[j], a[i - 1]];
    a[i - 1] = _ref[0];
    a[j] = _ref[1];
  }
}

/*** Return shuffled question ***/
function generateQuestions(){
  var questions=shuffleArray(quizdata);    
  return questions;
}

/*** Return list of options ***/
function returnOptionList(opts, i){

  var optionHtml='<li class="myoptions">'+
    '<input value="'+opts+'" name="optRdBtn" type="radio" id="rd_'+i+'">'+
    '<label for="rd_'+i+'">'+opts+'</label>'+
    '<div class="bullet">'+
      '<div class="line zero"></div>'+
      '<div class="line one"></div>'+
      '<div class="line two"></div>'+
      '<div class="line three"></div>'+
      '<div class="line four"></div>'+
      '<div class="line five"></div>'+
      '<div class="line six"></div>'+
      '<div class="line seven"></div>'+
    '</div>'+
  '</li>';

  return optionHtml;
}

/** Render Options **/
function renderOptions(optionList){
  var ulContainer=$('<ul>').attr('id','optionList');
  for (var i = 0, len = optionList.length; i < len; i++) {
    var optionContainer=returnOptionList(optionList[i], i)
    ulContainer.append(optionContainer);
  }
  $(".answerOptions").html('').append(ulContainer);
}

/** Render question **/
function renderQuestion(question){
  $(".question").html("<h1>"+question+"</h1>");
}

/** Render quiz :: Question and option **/
function renderQuiz(questions, index){ 
  var currentQuest=questions[index];  
  renderQuestion(currentQuest.question); 
  renderOptions(currentQuest.options); 
  console.log("Question");
  console.log(questions[index]);
}

/** Return correct answer of a question ***/
function getCorrectAnswer(questions, index){
  return questions[index].answer;
}

/** pushanswers in array **/
function correctAnswerArray(resultByCat){
  var arrayForChart=[];
  for(var i=0; i<resultByCat.length;i++){
   arrayForChart.push(resultByCat[i].correctanswer);
  }

  return arrayForChart;
}
/** Generate array for percentage calculation **/
function genResultArray(results, wrong){
  var resultByCat = resultByCategory(results);
  var arrayForChart=correctAnswerArray(resultByCat);
  arrayForChart.push(wrong);
  return arrayForChart
}

/** percentage Calculation **/
function percentCalculation(array, total){
  var percent = array.map(function (d, i) {
    return (100 * d / total).toFixed(2);
  });
  return percent;
}

/*** Get percentage for chart **/
function getPercentage(resultByCat, wrong){
  var totalNumber=resultList.length;
  var wrongAnwer=wrong;
  //var arrayForChart=genResultArray(resultByCat, wrong);
  //return percentCalculation(arrayForChart, totalNumber);
}

/** count right and wrong answer number **/
function countAnswers(results){

  var countCorrect=0, countWrong=0;

  for(var i=0;i<results.length;i++){
    if(results[i].iscorrect==true)  
        countCorrect++;
    else countWrong++;
  }

  return [countCorrect, countWrong];
}

/**** Categorize result *****/
function resultByCategory(results){

  var categoryCount = [];
  var ctArray=results.reduce(function (res, value) {
    if (!res[value.category]) {
        res[value.category] = {
            category: value.category,
            correctanswer: 0           
        };
        categoryCount.push(res[value.category])
    }
    var val=(value.iscorrect==true)?1:0;
    res[value.category].correctanswer += val; 
    return res;
  }, {});

  categoryCount.sort(function(a,b) {
    return a.category - b.category;
  });

  return categoryCount;
}


/** Total score pie chart**/
function totalPieChart(_upto, _cir_progress_id, _correct, _incorrect) {

   $("#"+_cir_progress_id).find("._text_incor").html("Incorrectas : "+_incorrect);
   $("#"+_cir_progress_id).find("._text_cor").html("Correctas : "+_correct);

   var unchnagedPer=_upto;
   
    _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

    var _progress = 0;

    var _cir_progress = $("#"+_cir_progress_id).find("._cir_P_y");
    var _text_percentage = $("#"+_cir_progress_id).find("._cir_Per");

    var _input_percentage;
    var _percentage;

    var _sleep = setInterval(_animateCircle, 25);

    function _animateCircle() {
      //2*pi*r == 753.6 +xxx=764
        _input_percentage = (_upto / 100) * 764;
        _percentage = (_progress / 100) * 764;

        _text_percentage.html(_progress + '%');

        if (_percentage >= _input_percentage) {
             _text_percentage.html('<tspan x="50%" dy="0em">'+unchnagedPer + '% </tspan><tspan  x="50%" dy="1.9em">Su resultado</tspan>');
            clearInterval(_sleep);
        } else {

            _progress++;

            _cir_progress.attr("stroke-dasharray",_percentage + ',764');
        }
    }
}
var nyan = document.getElementById('nyan');
var nyanBtn = document.getElementById('nyan-btn');

function playPause(song){
   if (song.paused && song.currentTime >= 0 && !song.ended) {
      song.play();
   } else {
      song.pause();
   }
}

function reset(btn, song){
   if(btn.classList.contains('playing')){
      btn.classList.toggle('playing');
   }
   song.pause();
   song.currentTime = 0;
}

function progress(btn, song){
   setTimeout(function(){
      var end = song.duration; 
      var current = song.currentTime;
      var percent = current/(end/100);
      //check if song is at the end
      if(current==end){
         reset(btn, song);
      }
      //set inset box shadow
      btn.style.boxShadow = "inset " + btn.offsetWidth * (percent/100) + "px 0px 0px 0px rgba(0,0,0,0.125)"
      //call function again
      progress(btn, song);     
   }, 1000);
}

nyanBtn.addEventListener('click', function(){
   nyanBtn.classList.toggle('playing');
   playPause(nyan);
   progress(nyanBtn, nyan);
});


function renderBriefChart(correct, total, incorrect){
  var percent=(100 * correct / total);
  if(Math.round(percent) !== percent) {
          percent = percent.toFixed(2);
  }

 totalPieChart(percent, '_cir_progress', correct, incorrect)
   
}
/*** render chart for result **/
function renderChart(data){
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [ "Verbal communication", 
              "Non-verbal communication", 
              "Written communication", 
              "Incorrect"
            ],
    datasets: [
                {
                 
                  data: data,
                  backgroundColor: [  '#e6ded4',
                                      '#968089',
                                      '#e3c3d4',
                                      '#ab4e6b'
                                    ],
                  borderColor: [  'rgba(239, 239, 81, 1)',
                                  '#8e3407',
                                  'rgba((239, 239, 81, 1)',
                                  '#000000'
                                ],
                  borderWidth: 1
                }
              ]
    },
    options: {
         pieceLabel: {
          render: 'percentage',
          fontColor: 'black',
          precision: 2
        }
      }
    
  });
}

/** List question and your answer and correct answer  

*****/
function getAllAnswer(results){
    var innerhtml="";
    for(var i=0;i<results.length;i++){

      var _class=((results[i].iscorrect)?"item-correct":"item-incorrect");
       var _classH=((results[i].iscorrect)?"h-correct":"h-incorrect");
      

      var _html='<div class="_resultboard '+_class+'">'+
                  '<div class="_header">'+results[i].question+'</div>'+
                  '<div class="_yourans '+_classH+'">'+results[i].clicked+'</div>';

        var html="";
       if(!results[i].iscorrect)
        html='<div class="_correct">'+results[i].answer+'</div>';
       _html=(_html+html)+'</div>';
       innerhtml+=_html;
    }

  $(".allAnswerBox").html('').append(innerhtml);
}
/** render  Brief Result **/
function renderResult(resultList){ 
  
  var results=resultList;
  console.log(results);
  var countCorrect=countAnswers(results)[0], 
  countWrong=countAnswers(results)[1];
  
  
  renderBriefChart(countCorrect, resultList.length, countWrong);
}

function renderChartResult(){
   var results=resultList; 
  var countCorrect=countAnswers(results)[0], 
  countWrong=countAnswers(results)[1];
  var dataForChart=genResultArray(resultList, countWrong);
  renderChart(dataForChart);
}

/** Insert progress bar in html **/
function getProgressindicator(length){
  var progressbarhtml=" ";
  for(var i=0;i<length;i++){
    progressbarhtml+='<div class="my-progress-indicator progress_'+(i+1)+' '+((i==0)?"active":"")+'"></div>';
  }
  $(progressbarhtml).insertAfter(".my-progress-bar");
} 

/*** change progress bar when next button is clicked ***/
function changeProgressValue(){
  $progressValue+= 6.6;
  if ($progressValue >= 100) {
    
  } else {
    if($progressValue==99) $progressValue=100;
    $('.my-progress')
      .find('.my-progress-indicator.active')
      .next('.my-progress-indicator')
      .addClass('active');      
    $('progress').val($progressValue);
  }
  $('.js-my-progress-completion').html($('progress').val() + '% complete');

}   
function addClickedAnswerToResult(questions,presentIndex,clicked ){
  var correct=getCorrectAnswer(questions, presentIndex);
    var result={
      index:presentIndex,
      question:questions[presentIndex].question, 
      clicked:clicked,
      iscorrect:(clicked==correct)?true:false,
      answer:correct, 
      category:questions[presentIndex].category
    }
    resultList.push(result);

    console.log("result");
    console.log(result);
      
}

$(document).ready(function() {
  
  var presentIndex=0;
   var clicked=0;

  var questions=generateQuestions();
  renderQuiz(questions, presentIndex);
  getProgressindicator(questions.length);

  $(".answerOptions ").on('click','.myoptions>input', function(e){
    clicked=$(this).val();   

    if(questions.length==(presentIndex+1)){
      $("#submit").removeClass('hidden');
      $("#next").addClass("hidden");
    }
    else{

      $("#next").removeClass("hidden");
    }

     
  
  });



  $("#next").on('click',function(e){
    e.preventDefault();
    addClickedAnswerToResult(questions,presentIndex,clicked);

    $(this).addClass("hidden");
    
    presentIndex++;
    renderQuiz(questions, presentIndex);
    changeProgressValue();
  });

  $("#submit").on('click',function(e){
     addClickedAnswerToResult(questions,presentIndex,clicked);
    $('.multipleChoiceQues').hide();
    $(".resultArea").show();
    renderResult(resultList);

  });

  
  

   $(".resultArea").on('click','.viewchart',function(){
      $(".resultPage2").show();
       $(".resultPage1").hide();
       $(".resultPage3").hide();
       renderChartResult();
   });

    $(".resultArea").on('click','.backBtn',function(){
      $(".resultPage1").show();
       $(".resultPage2").hide();
       $(".resultPage3").hide();
        renderResult(resultList);
   });

    $(".resultArea").on('click','.viewanswer',function(){
      $(".resultPage3").show();
       $(".resultPage2").hide();
       $(".resultPage1").hide();
        getAllAnswer(resultList);
   });

  $(".resultArea").on('click','.replay',function(){
    window.location.reload(true);
  });

});