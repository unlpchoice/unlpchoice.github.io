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
    question:"¿Cuál de los siguientes músculos infrahioideos no se inserta en el hueso hioides?",
    options:["Músculo Esternocleidomastoideo", "Músculo Esternotiroideo", "Músculo Esternohioideo", "Músculo Digástrico"],
    answer:"Esternotiroideo",
    category:1
  },
{
    question:"¿Qué músculos conforman el triángulo de Farabeuff?",
    options:["Músculos Recto menor, Recto mayor y Oblicuo menor", "Músculos Recto menor, Oblicuo mayor y Oblicuo menor", "Músculos Recto mayor y Oblicuo menor", "Músculos Recto mayor Oblicuo menor y Oblicuo mayor"],
    answer:"Músculos Recto mayor Oblicuo menor y Oblicuo mayor",
    category:1
  },
  {
    question:"Con respecto al oblicuo mayor, marque la opción correcta:",
    options:["Esta inervado por el abdominogenital mayor y menor", "La aponeurosis del oblicuo mayor se une con la del oblicuo menor y pasa por detrás del recto mayor", "Los pilares interno y externo de la inserción pubiana dejan entre ellos un intervalo triangular que se denomina inguinal superficial", "Es el musculo más profundo del grupo de la pared anterolateral del abdomen."],
    answer:"Los pilares interno y externo de la inserción pubiana dejan entre ellos un intervalo triangular que se denomina anillo inguinal superficial",
    category:1
  },
  {
    question:"¿Cuál de los siguientes músculos pertenece al grupo de músculos Infrahioideos?",
    options:["Músculo Esternotiroideo", "Músculo Milohioideo", "Músculo Esternocleidomastoideo", "Músculo Digástrico"],
    answer:"Músculo Esternotiroideo",
    category:1
  },
   {
    question:"Con respecto a los pilares del músculo diafragma, marque la premisa correcta:",
    options:["El pilar derecho se inserta en la cara anterior de los cuerpos vertebrales correspondientes a las primeras vertebras toracicas", "Las fibras tendinosas más internas de los dos pilares se entrecruzan a menudo en la línea media con las del lado opuesto", "Los dos pilares limitan con la columna vertebral una amplia abertura dividida en dos orificios para el esófago y para la vena cava inferior", "Corresponden a la forma de inserción esternal"],
    answer:"Las fibras tendinosas más internas de los dos pilares se entrecruzan a menudo en la línea media con las del lado opuesto",
    category:1
  },
   {
    question:"¿Cuál es el límite inferior del abdomen?",
    options:["Músculos Oblicuos del abdomen", "Músculos retroperitoneales", "Músculo diafragma", "Músculos del periné"],
    answer:"Músculos del periné.",
    category:1
  },
    {
    question:"La inserción distal del musculo Serrato mayor del tórax se ubica en:",
    options:["La cara anterior de las costillas.", "El borde espinal de la escapula.", "La cara lateral de las costillas.", "El borde axilar del omoplato"],
    answer:"El borde espinal de la escapula.",
    category:1
  },
   {
    question:"¿En dónde se inserta distalmente el musculo Pectoral mayor?",
    options:["En el labio interno de la corredera bicipital.", "En el hueso esternón y la clavícula.", "En centro de la corredera bicipital.", "En el labio externo de la corredera bicipital."],
    answer:"En el labio externo de la corredera bicipital.",
    category:1
  },
   {
    question:"¿A qué se le llama centro frénico en el diafragma?",
    options:["A la parte muscular del diafragma.", "Porción tendinosa del diafragma.", "A todo lo que inerva el Nervio Frénico.", "A la porción anterior del diafragma."],
    answer:"Porción tendinosa del diafragma.",
    category:1
  },
   {
    question:"Con que elementos vasculares y nerviosos se relaciona el Músculo Escaleno Anterior.",
    options:["Nervio Frénico, Plexo Braquial y Vasos Yugulares Externos.", "Nervio Neumogástrico, Plexo Cervical, arteria Subclavia y Tronco Braquiocefálico venoso.", "Nervio Neumogástrico, Plexo Braquial, arteria Carótida Primitiva y vena Yugular Interna.", "Nervio Frénico, Plexo Braquial, arteria y vena subclavia."],
    answer:"Nervio Frénico, Plexo Braquial, arteria y vena subclavia.",
    category:1
  },
   {
    question:"¿Cuál de los siguientes músculos de la pared anterolateral del abdomen se encuentra más superficial?",
    options:["Músculo transverso.", "Músculo oblicuo mayor.", "Músculo oblicuo menor.", "Músculo cuadrado lumbar."],
    answer:"Músculo oblicuo mayor.",
    category:1
  },
  {
    question:"Con respecto al pectoral menor, marque la opción correcta:",
    options:["Se extiende desde la tercera y cuarta costilla hasta la apófisis coracoides.", "Forma parte del plano superficial junto con el pectoral mayor.", "c. Esta situado por debajo del subclavio del cual queda separado por un espacio denominado espacio clavipectoral.", "Cuando se toma su punto fijo en las costillas, sube el muñón del hombro."],
    answer:"Esta situado por debajo del subclavio del cual queda separado por un espacio denominado espacio clavipectoral.",
    category:1
  },
   {
    question:"¿Cuáles son las estructuras anatómicas relacionadas con la capa posterior del músculo esternocleidomastoideo?",
    options:["Vena Yugular Externa, Arterias Carótidas y Nervio Espinal.", "Vena Yugular Interna, Arteria Subclavia y Nervio Neumogástrico.", "Vena Yugular Externa, Arteria Carótida y Nervio Neumogástrico", "Vena Yugular Interna, Arterias Carótidas y Nervio Neumogástrico"],
    answer:"Vena Yugular Interna, Arterias Carótidas y Nervio Neumogástrico.",
    category:1
  },
 {
    question:"¿Qué es la fascia transversalis?",
    options:["Lámina aponeurótica que recubre por delante a los músculos transversos del abdomen.", "Lámina aponeurótica que recubre por detrás a los músculos transversos del abdomen.", "Lámina aponeurótica que recubre por delante al oblicuo Menor del abdomen"],
    answer:"Lámina aponeurótica que recubre por detrás a los músculos transversos del abdomen.",
    category:1
  },
{
    question:"¿Qué músculo está contenido en la aponeurosis perineal media?",
    options:["Transverso profundo", "Transverso superficial", "Elevador de ano", "Isquio cavernoso"],
    answer:"Transverso profundo",
    category:1
  },
   {
    question:"¿Qué relación anatómica presenta el escaleno anterior sobre su cara posterior, a nivel de la inserción clavicular?",
    options:["Vena subclavia.", "Nervio neumogástrico.", "Nervio frénico.", "Arteria subclavia."],
    answer:"Arteria subclavia.",
    category:1
  },
{
    question:"¿Cuáles son los límites de la fosa isquiorrectal?",
    options:["elevador del ano – obturador externo – transverso profundo", "elevador del ano – obturador interno", "elevador del ano – obturador interno – transverso superficial", "obturador interno – obturador externo – transverso profundo"],
    answer:"elevador del ano – obturador interno – transverso profundo",
    category:1
  },
{
    question:"¿Qué músculo forma el verdadero piso de la cavidad bucal?",
    options:["Músculo Geniohioideo.", "Músculo Digástrico.", "Músculo Estilohioideo.", "Músculo Milohioideo."],
    answer:"Músculo Milohioideo.",
    category:1
  },
 {
    question:"¿Qué función principal poseen los músculos de los canales espinales?",
    options:["Permiten lateralizar la columna.", "Extensores de la columna.", "Rotadores de la columna.", "Flexores de la columna."],
    answer:"Extensores de la columna.",
    category:1
  },
   {
    question:"El músculo Interespinoso es un músculo que se dispone:",
    options:["Entre las apófisis espinosas de dos vértebras contiguas.", "Entre las apófisis trasversas de dos vértebras contiguas.", "Desde la apófisis espinosa de una vértebra hacia la apófisis transversa de la vértebra suprayacente.", "Desde la apófisis trasversa de una vértebra hacia la apófisis espinosa de una vértebra suprayacente."],
    answer:"Entre las apófisis espinosas de dos vértebras contiguas.",
    category:1
  },
{
    question:"¿Cuáles de los siguientes músculos se encuentran envueltos directamente por la Aponeurosis Cervical Superficial?",
    options:["Músculos Infrahioideos.", "Músculo cutáneo del cuello y Esternocleidomastoideo.", "Músculos Suprahioideos y Esternocleidomastoideo.", "Músculos Prevertebrales y Músculos Escalenos."],
    answer:"Músculo cutáneo del cuello y Esternocleidomastoideo.",
    category:1
  },
      {
    question:"¿Cuáles son los músculos largos de la región anterolateral del tórax?",
    options:["Recto mayor del abdomen y aductor medio.", "Recto mayor del abdomen y piramidal.", "Recto Mayor del abdomen y el Oblicuo mayor.", "Piramidal y Transverso del abdomen."],
    answer:"Recto mayor del abdomen y piramidal.",
    category:1
  },
{
    question:"¿Cuáles son las acciones del grupo lateral del cuello? mas de una respuesta correcta.",
    options:["Flexión lateral del cuello y Rotacion de las Costillas", "Rotación de las costillas", "Elevación de las costillas y Flexion Lateral del Cuello.", "Extensión lateral del cuello"],
    answer:"Elevación de las costillas y Flexion Lateral del Cuello.",
    category:1
  },
{
    question:"¿Qué nervio inerva principalmente el musculo Esternocleidomastoideo?",
    options:["Nervio Vago.", "Plexo braquial.", "Nervio Hipogloso.", "Nervio Espinal."],
    answer:"Nervio Espinal.",
    category:1
  },
{
    question:"¿Cuáles son los músculos infrahioideos?",
    options:["Músculos Esternocleidohioideo, omohioideo, esternocleidomastoideo y recto anterior.", "Músculos Esternocleidomastoideo,tirohioideo y esternotiroideo.", "Músculos Tirohioideo, esternotiroideo, esternocleidomastoideo y recto anterior.", "Músculos Esternocleidohioideo, omohioideo, tirohioideo y esternotiroideo."],
    answer:"Músculos Esternocleidohioideo, omohioideo, tirohioideo y esternotiroideo.",
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
  $progressValue+= 4.16;
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