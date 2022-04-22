

var $progressValue = 0;
var resultList=[];


const quizdata=[
      {
        question:"¿Qué estructura sale del endocraneo por el agujero estilomastoideo?",
        options:["A) Nervio Facial.", "B) Arteria Carótida interna.", "C) Arteria meníngea media.", "D) Nervio Hipogloso."],
        answer:"A) Nervio Facial.",
        category:1
      },
      {
        question:"¿Entre que planos del espacio puede estár situado un elemento anatómico?",
        options:["A)Plano sagital y plano frontal únicamente", "B)Plano sagital, plano frontal, y plano Axial", "C)Plano sagital y plano axial únicamente", "D)Plano sagital, plano frontal y plano anteroposterior"],
        answer:"B)Plano sagital, plano frontal, y plano Axial",
        category:2
      },
      {
        question:"¿Dónde se encuentra la escotadura cotiloidea?",
        options:["A)En el borde inferior de la cavidad cotiloidea. ", "B)En el borde superior de la cavidad cotiloidea.", "C)En la rama horizontal del pubis", "D)En la tuberosidad Isquiática."],
        answer:"A)En el borde inferior de la cavidad cotiloidea.",
        category:3
      },
      {
        question:"De manera general los huesos largos presentan",
        options:[":A) Una epífisis, una diáfisis y una metáfisis. ", "B) Dos epífisis, dos metáfisis y una diáfisis.", "C) Dos diáfisis y una epífisis.", "D) Dos epífisis y una metáfisis."],
        answer:"B) Dos epífisis, dos metáfisis y una diáfisis.",
        category:1
      },
      {
        question:"La columna vertebral se encuentra formada por:",
        options:["A) 7 vértebras cervicales, 12 vértebras torácicas, 5 vértebras lumbares, 5 vértebras sacras, (3-5)  vértebras coccígeas.", "B) 5 vértebras cervicales, 7 vértebras torácicas, 12 vértebras lumbares, 5 vértebras sacras, 5 vértebras coccígeas. ", "C) 6 vértebras cervicales, 10 vértebras torácicas, 5 vértebras lumbares, 5 vértebras sacras, 5 vértebras coccígeas.", ".D) 7 vértebras cervicales, 12 vértebras torácicas, 5 vértebras lumbares, 3 vértebras sacras, 2 vértebras coccígeas. "],
        answer:"A) 7 vértebras cervicales, 12 vértebras torácicas, 5 vértebras lumbares, 5 vértebras sacras, (3-5)  vértebras coccígeas.",
        category:2
      },
      {
        question:"9) El hueso esternón está formado por la fusión de: ",
        options:["A)Manubrio, cara y proceso xifoideo. ", ". B)Cabeza, cuerpo y cola", "C)Cabeza, cuerpo y proceso xifoideo. ", "D)Manubrio, cuerpo y proceso xifoideo."],
        answer:"D)Manubrio, cuerpo y proceso xifoideo.",
        category:3
      },
      {
        question:"Los espacios delimitados entre las costillas se denominan:",
        options:["A- Espacios Intervertebrales", "B- Espacios Supracostales. ", "C-  Espacios Infracostales.", "D-  Espacios Intercostales"],
        answer:"D-  Espacios Intercostales",
        category:2
      },
      {
        question:"Sobre el hueso fémur, decimos que la extremidad proximal es:",
        options:["A)Aquella que se encuentra más alejada del eje medio del cuerpo.", "B)Aquella que se la que se une al coxal.", "C)Aquella que se encuentra en la diáfisis femoral.", "D)El fémur no presenta epífisis"],
        answer:"B)Aquella que se la que se une al coxal.",
        category:3
      },
      {
        question:"Los espacios delimitados entre las costillas se denominan:",
        options:["Espacios Intervertebrales.", "Espacios Supracostales. ", "Espacios Infracostales.", "Espacios Intercostales."],
        answer:"Espacios Intercostales.",
        category:1
      },
      {
        question:"12)Los limites óseos del agujero de conjunción son: ",
        options:["A)Borde posterior del cuerpo vertebral de dos vertebra, pedículo de la vértebra suprayasente, la articulación de las apófisis articulares de la vértebra supra e infra adyacente entre sí, y el pedículo de la vértebra infra adyacente. ", "B)Borde posterior del cuerpo vertebral de la vértebra supra adyacente, apófisis articulares de dicha vertebra, sus pedículos y la apófisis espinosa, bordeposterior del cuerpo de la vértebra infra adyacente, apófisis articulares de la misma, sus pedículos y su apófisis espinosa.", ".C)Borde posterior del cuerpo de las dos vértebras contiguas, sus pedículos y susapófisis articulares. ", "D)Borde posterior del cuerpo de las dos vértebras contiguas, sus laminas y sus apófisis espinosas respectivamente. "],
        answer:"A)Borde posterior del cuerpo vertebral de dos vertebra, pedículo de la vértebra suprayasente, la articulación de las apófisis articulares de la vértebra supra e infra adyacente entre sí, y el pedículo de la vértebra infra adyacente.",
        category:2
      },
      {
        question:"¿Que estructura se encuentra por delante del tubérculo de Linsfranc? ",
        options:["a) El canal anterior para la arteria subclavia.", "b) El canal posterior para la arteria subclavia ", "c) El canal anterior para la vena subclavia.", "d) El canal posterior para la vena subclavia."],
        answer:"El canal anterior para la vena subclavia",
        category:3
      },
      {
        question:"T) Marque la opción correcta con respecto a los límites del agujero obturador.  ",
        options:["A)Cuerpo del isquion, rama del isquion, rama descendente del pubis, cuerpo del pubis y rama horizontal del pubis. ", "B)Cuerpo del pubis, rama del isquion, rama descendente del pubis, cuerpo del pubis y rama horizontal del pubis. ", "C)Rama del isquion, rama descendente del pubis, cuerpo del pubis y rama horizontal del pubis.", "D)Cuerpo del pubis, rama ascendente del pubis, rama descendente del pubis,cuerpo del isquion y rama ascendente del isquion."],
        answer:"Cuerpo del isquion, rama del isquion, rama descendente del pubis, cuerpo del pubis y rama horizontal del pubis.",
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
  $progressValue+= 9;
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