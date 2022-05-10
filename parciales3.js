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
    question:"Quien limita la retroversión del muslo?",
    options:["Ligamento pubofemoral", " Músculos del muslo", "Contacto oseo cuello del femur con acetabulo", "Ligamento isquiofemoral"],
    answer:"Contacto oseo cuello del femur con acetabulo",
    category:1
  },
  {
      question:"¿Qué tipo de articulación es la atloidoodontoidea?      ",
      options:["Trocoide","Condílea", "Artrodia", "Sínfisis"],
      answer:"Trocoide",
      category:1
    },
    {
      question:"¿Cual de las siguientes acciones son mayormente producida por el trapecio?",
      options:["Flexión de la cabeza","Rotación interna del brazo","Elevacion de hombros", "Descenso de los hombros"],
      answer:"Elevacion de hombros",
      category:1
    },
    {
      question:"La porción corta del músculo bíceps se inserta proximalmente en:",
      options:["El borde interno de la apófisis coracoides del hueso escápula, junto con el músculo coracobraquial.", "El vértice de la apófisis coracoides del hueso escápula, junto con el músculo coracobraquial.", "El vértice de la apófisis coracoides del hueso escápula, junto con el músculo pectoral menor", "El borde interno de la apófisis coracoides del hueso escápula, junto con el  músculo pectoral menor."],
      answer:"El vértice de la apófisis coracoides del hueso escápula, junto con el músculo coracobraquial.",
      category:1
    },
    {
      question:" ¿De cuántas estructuras osificantes proviene el hueso Coxal?",
      options:["1", "3", "4", "2"],
      answer:"3",
      category:1
    },
    {
      question:"Con cual de estas regiones no se relaciona la cavidad orbitaria.",
      options:["Las fosas nasales.", "La fosa cerebral media.", "Orofaringe", "La fosa pterigomaxilar"],
      answer:"Orofaringe",
      category:1
    },
    {
      question:"¿A qué hace referencia el termino proximal, en una estructura anatómica perteneciente a los miembros?",
      options:["Ninguna de las anteriores", "Se refiere a la parte más alejada de su raíz", "Se refiere a la parte media de la estructura ", "Se refiere a la parte cercana de la raíz"],
      answer:"Se refiere a la parte cercana de la raíz",
      category:1
    },
    {
        question:"¿Cuál es la sutura Coronal en el cráneo?",
        options:["Sutura Mentoniana.", "Sutura Frontotemporal", "Sutura Frontomalar.", "Sutura Frontoparietal."],
        answer:"Sutura Frontoparietal.",
        category:1
      },
      {
        question:"¿Cuáles son las inserciones laterales del omohioideo?",
        options:["Acrómion", "Cerca de la escotadura coracoidea", "Clavícula", "Hioides"],
        answer:"Cerca de la escotadura coracoidea",
        category:1
      },
      {
        question:"I la respuesta correcta respecto al cóndilo temporal:",
        options:["Permite la articulación del cráneo con la columna vertebral", "Permite la articulación del hueso temporal con el hueso malar", "Forma parte de la articulación temporomandibular", "Contiene al agujero condíleo anterior"],
        answer:"Forma parte de la articulación temporomandibular",
        category:1
      },
  {
    question:"En relación a la diáfisis femoral (señale la afirmación correcta):",
    options:["Posee un borde anterior rugoso", "Posee un borde posterior rugoso.", "Posee una cara posterior lisa.", "Ningún músculo se inserta en su superficie."],
    answer:"Posee un borde posterior rugoso",
    category:1
  },
  {
      question:"Una de las siguientes afirmaciones es correcta en relación a los músculos de la mímica",
      options:["están todos inervados por el facial", "todos elevan la mandíbula", "se forman a partir del primer arco faríngeo", "están todos inervados por el trigémino"],
      answer:"están todos inervados por el facial",
      category:1
    },
    {
      question:"¿Cómo se denomina de modo genérico a las articulaciones semi móvil?",
      options:["anfiartrosis", "diartrosis", "artrosis", "sinartrosis"],
      answer:"sinartrosis",
      category:1
    },
    {
      question:"¿Qué función tiene el  musculo obturador interno?",
      options:["Rotador externo del fémur", "Estabilizador de la cadera", "Rotador interno del fémur", "Extensor puro del fémur"],
      answer:"Rotador externo del fémur",
      category:1
    },
    {
      question:"Como se inerva en musculo anconeo?",
      options:["Nervio cubital", "Ramo radial nacido en alto en el humero", "Ramo radial nacido en la raiz posterior del antebrazo","Nervio circunflejo"],
      answer:"Ramo radial nacido en alto en el humero",
      category:1
    },
    {
      question:"¿Cuáles son los músculos infrahioideos?",
      options:["Músculos Esternocleidohioideo, omohioideo, tirohioideo y esternotiroideo.", "Músculos Esternocleidomastoideo,tirohioideo y esternotiroideo", "Músculos Tirohioideo,  esternotiroideo, esternocleidomastoideo y rectoanterior", "Músculos Esternocleidohioideo, omohioideo, esternocleidomastoideo y rectoanterior."],
      answer:"Músculos Esternocleidohioideo, omohioideo, tirohioideo y esternotiroideo",
      category:1
    },
    {
      question:"¿De dónde provienen los pilares interno y externo del orificio superficial del conducto inguinal?",
      options:["Aponeurosis del transverso", "Aponeurosis del oblicuo externo", "Aponeurosis del oblicuo interno", "Fascia transversalis"],
      answer:"Aponeurosis del oblicuo externo",
      category:1
    },
    {
        question:"¿Qué sucede cuando se contraen ambos esternocleidomastoideo simultáneamente?",
        options:["Se gira la cabeza con dificultad hacia la derecha", "La cabeza no se mueve", "Se gira la cabeza con dificultad hacia la izquierda", "Se eleva el mentón"],
        answer:"Se eleva el mentón",
        category:1
      },
      {
        question:"¿Dónde se inserta el ligamento cruzado posterior?",
        options:["en el cóndilo interno", "en el peroné", "en el cóndilo externo", "la rótula"],
        answer:"en el cóndilo interno",
        category:1
      },
      {
        question:"¿Cómo se clasifica la articulación radio-cúbito-carpiana?",
        options:["Diartrosis – encaje recíproco", "Diartrosis - artrodia", "Diartrosis – condílea", "d. Anfiartrosis - sínfisis"],
        answer:"Diartrosis – condílea",
        category:1
      },
      {
          question:"Que ligamento se deber seccionar para ingresar desde dorsal al conducto raquideo?",
          options:["Ligamento interespinoso", "Ligamento vertebral común anterior", "Ligamento amarillo", "Ligamento vertebral común posterior"],
          answer:"Ligamento amarillo",
          category:1
        },
        {
            question:"¿A partir de que dos procesos se pueden osificar los huesos?",
            options:["Osificación endocondral y osificación fibrosa", " Solo osificación endocondral", "Osificación endocondral y osificación cartilaginosa", "Solo osificación cartilaginosa"],
            answer:"Osificación endocondral y osificación fibrosa",
            category:1
          },
          {
            question:"¿Con cuál de los siguientes huesos del carpo se articula el radio?",
            options:["Piramidal", "Escafoides", "Trapecio", "Hueso grande"],
            answer:"Escafoides",
            category:1
          },
          {
            question:"Uno de los siguientes elementos de encuentra en el espacio cubito carpiano:",
            options:["Arteria cubital", "Ligamento cuadrado", "Ligamento anular", "Ligamento triangular"],
            answer:"Ligamento triangular",
            category:1
          },
          {
            question:"¿Qué huesos forman la arcada cigomática?",
            options:["Hueso temporal y hueso malar.", "Hueso occipital y hueso parietal", "Hueso malar y hueso esfenoides.", "Hueso temporal y hueso esfenoides"],
            answer:"Hueso temporal y hueso malar.",
            category:1
          },
          {
            question:"Sólo una de las siguientes afirmaciones es correcta en relación al hueso fémur.",
            options:["El hueso no posee canal medular.", "La cabeza forma con la diáfisis un ángulo de aproximadamente 130º.", "Ambos cóndilos están a la misma altura.", " La cabeza forma con la diáfisis un ángulo de aproximadamente 45º."],
            answer:"La cabeza forma con la diáfisis un ángulo de aproximadamente 130º.",
            category:1
          },
          {
            question:"Una vértebra es un hueso:",
            options:["Plano", "Corto", "Sesamoideos", "Largo"],
            answer:"Corto",
            category:1
          },
          {
              question:"¿A qué se denomina  músculos cuádriceps?",
              options:["a dos inserciones proximales y una distal", "a cuatro inserciones proximales una distal", "a tres inserciones proximales y una distal", "a cuatro cuerpos musculares consecutivos"],
              answer:"a cuatro inserciones proximales una distal",
              category:1
            },
            {
              question:"¿Cuál de estos huesos es considerado plano?",
              options:["Clavícula", "Parietal", "Fémur", "Rotula"],
              answer:"Parietal",
              category:1
            },
            {
              question:"¿Quién inerva sensitivamente la mitad superior de la región glútea?",
              options:["Nervio glúteo inferior", "Nervios lumbares", "Nervios sacros", "Nervio glúteo superior"],
              answer:"Nervios lumbares",
              category:1
            },
        {
          question:"La inserción distal del musculo Serrato mayor del tórax se ubica en:",
          options:["La cara anterior de las costillas", "El borde espinal de la escapula", "El borde axilar del omoplato", "La cara lateral de las costillas"],
          answer:"El borde espinal de la escapula",
          category:1
        },
        {
            question:"¿Cuál de estos elementos NO forma parte de la articulación gleno humeral?",
            options:["Ligamento gleno humeral superior", "Ligamento coraco humeral", "Ligamento glenohumeral inferior", "Ligamento trapezoide"],
            answer:"Ligamento trapezoide",
            category:1
          },
          {
            question:"¿Cuál de los siguientes músculos prevertebrales extiende su inserción distal hasta la columna torácica?",
            options:["Recto lateral", "Recto anterior menor", "Largo del cuello", "Recto anterior mayor"],
            answer:"Largo del cuello",
            category:1
          },
          {
            question:"Con respecto al pectoral menor, marque la opción correcta:",
            options:["Se extiende desde la tercera y cuarta costilla hasta la apófisis coracoides", "Cuando se toma su punto fijo en las costillas, sube el muñón del hombro.", "Forma parte del plano superficial junto con el pectoral mayor", "Esta situado por debajo del subclavio del cual queda separado por un espacio denominado espacio clavipectoral."],
            answer:"Esta situado por debajo del subclavio del cual queda separado por  un espacio denominado espacio clavipectoral.",
            category:1
          },
          {
            question:"¿Cómo se clasifica a la articulación de la rodilla cuando está flexionada?",
            options:["Condílea", "Troclear", "Enartrosis", "Trocoide"],
            answer:"Condílea",
            category:1
          },
          {
            question:"¿Qué es la fascia transversalis?",
            options:[" Lámina aponeurótica que recubre por delante al oblicuo Menor del abdomen.", "Lámina aponeurótica que recubre por detrás a los músculos transversos del abdomen.", " Lámina aponeurótica que recubre por delante al músculo recto mayor del abdomen.", "Lámina aponeurótica que recubre por delante a los músculos transversos del abdomen."],
            answer:"Lámina aponeurótica que recubre por detrás a los músculos transversos del abdomen.",
            category:1
          },
          {
            question:"¿Cuál es una característica distintiva del buccinador en relación al resto de los músculos de la mímica?",
            options:["es inervado por el trigémino", "desciende la mandíbula", "es perforado por el conducto parotídeo", "es inervado por el facial"],
            answer:"es perforado por el conducto parotídeo",
            category:1
          },
          {
              question:"¿Cuál es la acción completa del bíceps braquial?",
              options:["Flexor del antebrazo.", "Flexor y pronador del antebrazo.", "Flexor y supinador del antebrazo.", "Extensor del antebrazo."],
              answer:"Flexor y supinador del antebrazo.",
              category:1
            },
            {
              question:"¿Cómo se forma la pared interna ósea de las fosas nasales?",
              options:["Lamina perpendicular del etmiodes", "Lámina perpendicular del etmoides y vómer", "Rama vertical del palatino", "Vómer"],
              answer:"Lámina perpendicular del etmoides y vómer",
              category:1
            },
            {
              question:"En la región posterior del brazo se forma un espacio triangular por donde pasa el nervio radial y la arteria humeral profunda. ¿Cuáles son los límites de ese triángulo?",
              options:["Redondo mayor – porción corta del tríceps – vasto interno del tríceps", "Redondo menor – porción larga del tríceps – vasto interno del tricepsx", "Redondo mayor – porción larga del tríceps – vasto externo del tríceps", "Redondo mayor – porción larga del tríceps – vasto interno del tríceps"],
              answer:"Redondo mayor – porción larga del tríceps – vasto interno del tríceps",
              category:1
            },
            {
              question:"Quien limita la retroversión del muslo?",
              options:["Ligamento pubofemoral", "Músculos del muslo", "Contacto oseo cuello del femur con acetabulo", "Ligamento isquiofemoral"],
              answer:"Contacto oseo cuello del femur con acetabulo",
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