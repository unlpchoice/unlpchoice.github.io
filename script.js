

var $progressValue = 0;
var resultList=[];


const quizdata=[
      {
        question:"¿Qué tipo de articulación es la Calcáneo-cuboidea y la Astrágalo-escafoidea respectivamente?",
        options:["Artrodia y Condílea.", "Encaje reciproco y Condílea.", "Artrodia y Enartrosis.", "Encaje reciproco y Enartrosis"],
        answer:"Encaje reciproco y Enartrosis.",
        category:1
      },
	  {
        question:"¿Cuál es la estructura que se ubica entre los músculos y sus tendones, con fin de evitar roces y
desgaste de misma fricción entre ellos?",
        options:["Vainas sinoviales", "Aponeurosis.", "Fascias.", "Bolsa serosa."],
        answer:"  Bolsa serosa.",
        category:1
      },
      {
        question:"Cuál es la estructura anatómica de tejido conectivo que envuelve a los músculos en particular,
de esta manera sectorizándolo para que su contracción vaya en un sentido determinado?",
        options:["Vainas sinoviales.", "Fascias.", " Bolsa serosa.", "Aponeurosis."],
        answer:"Fascias.",
        category:1
      },
      {
        question:"Cual de estos movimientos no ejecuta la rodilla?",
        options:["Flexion,", " Circunduccion.", "Rotación.", " Extensión."],
        answer:"Circunduccion.",
        category:1
      },
       {
        question:"La llamada “articulación de Lisfranc”, se corresponde con cuál de las siguientes articulaciones:",
        options:["Mediotarsiana.", "Tarsometatarsiana", "Tibioperoneoastragalina", "Metatarsofalángica"],
        answer:"Tarsometatarsiana",
        category:1
      },
      {
        question:"Qué limita la retroversion del muslo?",
        options:["El cuello del femur contacta con la ceja cotiloidea", "Ligamento isquiofemoral", " Ligamento redondo", "Ligamento pubofemoral"],
        answer:" El cuello del femur contacta con la ceja cotiloidea",
        category:1
      },
	  	  {
        question:"Con respecto a la Rodilla, marque la opción INCORRECTA",
        options:["a. Con la rotación externa de la rodilla los ligamentos cruzados de
DESENRROLLAN", "b. El ligamento cruzado posterior se dirige desde la superficie retro espinosa de la
tibia hacia arriba, adelante y adentro para insertarse en el cóndilo interno.", "Los ligamentos cruzados son dos: uno anterior y otro posterior.", "El ligamento cruzado anterior se dirige de la superficie preespinosa de la tibia
hacia atrás, arriba y afuera para insertarse en el cóndilo externo."],
        answer:"Con la rotación externa de la rodilla los ligamentos cruzados de DESENRROLLAN",
        category:1
      },
       {
        question:"¿Cuál es la estructura que se ubica entre los músculos y sus tendones, con fin de evitar roces y
desgaste de misma fricción entre ellos?",
        options:["Aponeurosis.", "Fascias.", "Vainas sinoviales.", "Bolsa serosa."],
        answer:"Bolsa serosa.",
        category:1
      },
       {
        question:"¿Cuál es el elemento anatómico que forma parte del músculo, de color blanca nacarada y
poseen cierta capacidad contráctil?",
        options:["Vainas sinoviales", "Bolsa serosa.", "Fascias.", "Aponeurosis."],
        answer:"Aponeurosis.",
        category:1
      },
       {
        question:"Con respecto a la articulacion coxofemoral, marque la opcion INCORRECTA",
        options:["En el trasfondo de la cavidad cotiloidea se inserta el ligamento redondo para la
cabeza del fémur.", "Al ser una enartrosis, solo posee movimientos de flexo-extensión.", "El rodete cotiloideo sirve de contención para la cabeza del fémur.", "La escotadura isquiopubiana se encuentra cerrada por el ligamento transverso."],
        answer:"Al ser una enartrosis, solo posee movimientos de flexo-extensión.",
        category:1
      },
       {
        question:"A qué nos referimos cuando se un músculo es de carácter Digástrico?",
        options:["Tiene dos vientres musculares separados por una porción tendinosa.", "Solo tiene un vientre muscular.", "Tiene un vientre muscular y un tendón de inserción.", "Ninguna de las anteriores es correcta."],
        answer:"Tiene dos vientres musculares separados por una porción tendinosa.",
        category:1
      },
      {
        question:"La llamada “articulación de Chopart”, a cuál de las siguientes articulaciones se corresponde?",
        options:["Metatarsofalángica.", "Tibioperoneoastragalina.", "Tarsometatarsiana.", "Mediotarsiana."],
        answer:"Mediotarsiana.",
        category:1
      },
       {
        question:"Que ligamento limita la hiperextension de la rodilla",
        options:["Ligamento lateral externo", "Ligamento lateral interno", "Ligamento cruzado anterior", "Ligamento cruzado posterior"],
        answer:"Ligamento lateral interno",
        category:1
      },
	   {
        question:"¿Cuál es la estructura que envuelve a los tendones largos y contienen en su interior líquido?",
        options:["Fascias.", "Aponeurosis.", "Bolsa serosa.", "Vainas sinoviales"],
        answer:"Vainas sinoviales",
        category:1
      },
	  {
        question:"¿Cuáles son los huesos que articulan con el hueso grande del tarso?",
        options:["Trapecio, trapezoide, semilunar, piramidal, 3° y 4° metacarpiano.", "Trapecio, trapezoide, semilunar, piramidal, pisiforme, 2° 3° y 4° metacarpiano.", "Trapezoide, escafoides, semilunar, hueso ganchoso, 2°, 3° y 4°. Metacarpianos.", "Los cinco metacarpiano y el hueso semilunar."],
        answer:"Trapezoide, escafoides, semilunar, hueso ganchoso, 2°, 3° y 4°.
Metacarpianos.",
        category:1
      },
       {
        question:"¿Qué tipo de articulación es la articulación sacroilíaca?",
        options:["Sinartrosis.", "Troclear.", "Artrodia.", "Diartroanfiartrosis."],
        answer:"Diartroanfiartrosis",
        category:1
      },
	  {
        question:"Cual estos es un movimiento NORMAL de la rodilla",
        options:["Rotación", "Cajon Posterior", "Cajón anterior", "Bostezo externo"],
        answer:"Rotación",
        category:1
      },
	  {
        question:"La llamada “articulación de Chopart”, a cuál de las siguientes articulaciones se corresponde?",
        options:["Metatarsofalángica", "Tibioperoneoastragalina.", "Tarsometatarsiana.", "Mediotarsiana."],
        answer:"Mediotarsiana.",
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