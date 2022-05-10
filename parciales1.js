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
        question:"Consideramos una cara anterior a aquella que:",
        options:["Mira hacia superior", "No la vemos, está hacia atrás", "Mira hacia el eje del cuerpo", "Vemos de frente"],
        answer:"Vemos de frente",
        category:1
      },
    {
        question:"¿Cuál es la inervación del músculo Deltoides?",
        options:["El nervio radial.", "El nervio mediano.", "El nervio cubital.", "El nervio circunflejo."],
        answer:"El nervio circunflejo.",
        category:1
      },
    {
      question:"Con respecto al oblicuo mayor, marque la opción correcta:",
      options:["Es el musculo más profundo del grupo de la pared anterolateral del abdomen.", "Esta inervado por el abdominogenital mayor y menor.", "Los pilares interno y externo de la inserción pubiana dejan entre ellos un intervalo triangular que se denomina anillo inguinal superficial.", "La aponeurosis del oblicuo mayor se une con la del oblicuo menor y pasa por detrás del recto mayor."],
      answer:"Los pilares interno y externo de la inserción pubiana dejan entre ellos un intervalo triangular que se denomina anillo inguinal superficial.",
      category:1
    },
    {
        question:"¿Cuáles son las inserciones laterales del omohioideo?",
        options:["Acrómion", "Hioides", "Cerca de la escotadura coracoidea", "Clavícula"],
        answer:"Cerca de la escotadura coracoidea",
        category:1
      },
    {
        question:"Una vértebra es un hueso:",
        options:["Sesamoideos", "Corto", "Largo", "Plano"],
        answer:"Corto",
        category:1
      },
    {
      question:"¿Cuál de los siguientes grupos musculares se insertan en la apófisis coracoides del omóplato?",
      options:["Coracobraquial – porción corta del bíceps – pectoral mayor", "Coracobraquial - porción corta del bíceps – pectoral menor", "Coracobraquial – porción larga del bíceps – pectoral menor", "Porción corta y larga del bíceps – pectoral mayor"],
      answer:"Coracobraquial - porción corta del bíceps – pectoral menor",
      category:1
    },
    {
        question:"¿De cuál de las siguientes estructuras es satélite (lo acompaña en su trayecto) el músculo esternocleidomastoideo?",
        options:["Paquete vasculonervioso del cuello", "Vena yugular externa", "Plexo cervical", "Plexo braquial"],
        answer:"Paquete vasculonervioso del cuello",
        category:1
      },
    {
        question:"¿Cuáles son las estructuras anatómicas relacionadas con la capa posterior del músculo esternocleidomastoideo?",
        options:["Vena Yugular Interna, Arteria Subclavia y Nervio Neumogástrico.", " Vena Yugular Interna, Arterias Carótidas y Nervio Neumogástrico.", "Vena Yugular Externa, Arterias Carótidas y Nervio Espinal.", "Vena Yugular Externa, Arteria Carótida y Nervio Neumogástrico"],
        answer:"Vena Yugular Interna, Arterias Carótidas y Nervio Neumogástrico.",
        category:1
      },
    {
      question:"¿Qué es una apófisis?",
      options:["Es un hueso sesamoideo", "Es un hueso wormiano", "Hace referencia a una epífisis", "Prolongación ósea"],
      answer:"Prolongación ósea",
      category:1
    },
    {
        question:"Con respecto al músculo coracobraquial, señale la opción correcta:",
        options:["Su inserción proximal es en el acromion.", "Es abductor del brazo.", "Su inserción distal es en la cara posterolateral del humero.", "Esta inervado por el nervio musculocutáneo."],
        answer:"Esta inervado por el nervio musculocutáneo.",
        category:1
      },
    {
        question:"¿Qué tipo de articulación es la astragalina escafoidea?",
        options:["Artrodia", "Enartrosis", "Sutura", "Encaje recíproco"],
        answer:"Enartrosis",
        category:1
      },
    {
      question:"¿Cuál es el ligamento que se encuentra en el seno del tarso?",
      options:["Tibioperoneo", "Peroneo astragalina", "Calcaneo Cuboideo", "Calcaneo Astragalino"],
      answer:"Calcaneo astragalino",
      category:1
    },
    {
        question:"¿En dónde se inserta distalmente el musculo Pectoral mayor?",
        options:["En centro de la corredera bicipital.", "En el labio interno de la corredera bicipital.", "En el labio externo de la corredera bicipital.", "En el hueso esternón y la clavícula."],
        answer:"En el labio externo de la corredera bicipital.",
        category:1
      },
    {
        question:"¿Quién inerva al músculo deltoides?",
        options:["Nervio Espinal C1", "Nervio Radial", "Nervio Espina", "Nervio Circunflejo"],
        answer:"Nervio Circunfejo",
        category:1
      },
    {
      question:"¿Cuál de los siguientes términos es sinónimos de un corte Axial?",
      options:["Sagital", "Oblicuo", "Coronal", "Transversal"],
      answer:"Transversal",
      category:1
    },
    {
        question:"¿Cuál de los siguientes elementos se encuentra por dentro de la cápsula articular del hombro?",
        options:["El ligamento glenohumeral superior", "El tendón de la porción larga del músculo bíceps", "El tendón de la porción larga del tríceps", "El tendón de la porción corta del bíceps"],
        answer:"El tendón de la porción larga del músculo bíceps",
        category:1
      },
    {
        question:"Indique la respuesta correcta respecto al cóndilo temporal:",
        options:["Permite la articulación del cráneo con la columna vertebral", "Forma parte de la articulación temporomandibular", "Permite la articulación del hueso temporal con el hueso malar", "Contiene al agujero condíleo anterior"],
        answer:"Forma parte de la articulación temporomandibular",
        category:1
      },
    {
      question:"¿A qué se le llama centro frénico en el diafragma?",
      options:["A la parte muscular del diafragma.", "A la porción anterior del diafragma.", "A todo lo que inerva el Nervio Frénico.", "Porción tendinosa del diafragma."],
      answer:"Porción tendinosa del diafragma.",
      category:1
    },
    {
        question:"¿Cómo se clasifica la articulación esternoclavicular?",
        options:["Encaje recíproco", "Artrodia", "Condílea", "Trocoide"],
        answer:"Encaje recíproco",
        category:1
      },
    {
        question:"Complete segun corresponda: POR EL AGUJERO REDONDO MAYOR PASA....",
        options:["Nervio maxilar", "Nervio vidiano", "Arteria meningea media", "Nervio mandibular"],
        answer:"Nervio Maxilar",
        category:1
      },
    {
      question:"En cuál de los siguientes huesos se encuentra el agujero infraorbitario:",
      options:["Hueso Maxilar superior.", "Hueso Frontal.", "Hueso Cigomático.", "Hueso Etmoides."],
      answer:"Hueso Maxilar superior.",
      category:1
    },
    {
        question:"Uno de los siguientes musculos no forma parte de los llamados epitroquealres. Señalelo.",
        options:["Flexor comun superficial (Flexor digitorum superficialis)", "Supinador corto (supinator)", "Cubital anterior (flexor carpi ulnaris)", "Palmar mayor (Flexor carpi radialis)"],
        answer:"Supinador corto (supinator)",
        category:1
      },
    {
        question:"¿Cuál es la función del músculo cigomático menor?",
        options:["Descender el labio", "Elevación de los labios", "Abrir el ala de la nariz", "Descender la mandíbula"],
        answer:"Elevación de los labios",
        category:1
      },
    {
      question:"¿Cuáles son las inserciones laterales del pectoral mayor?",
      options:["Labio externo de la corredera bicipital", "Labio interno de la corredera bicipital", "Tercio inferior del húmero", "Fondo de la corredera bicipital"],
      answer:"Labio externo de la corredera bicipital",
      category:1
    },
     {
        question:"¿Entre que planos del espacio está situado un elemento anatómico?",
        options:["Plano frontal y plano axial únicamente", "Plano sagital, plano frontal, y plano Axial", "Plano sagital y plano axial únicamente", "Plano sagital y plano frontal únicamente"],
        answer:"Plano sagital, plano frontal, y plano Axial",
        category:1
      },
    {
        question:"¿Cuál articulación es la responsable de la pronosupinación de la muñeca?",
        options:["Metacarpofalángica del 1° dedo", "Humerocubital", "Radiohumeral", "Radiocubital"],
        answer:"Radiocubital",
        category:1
      },
    {
      question:"El ángulo de Louis es el que se forma de la unión del manubrio y cuerpo del esternón y e fácilmente palpable sobre la piel. ¿Qué costilla se articula en ese lugar?",
      options:["Cuarta costilla", "Tercera costilla", "Segunda costilla", "Primera costilla"],
      answer:"Segunda costilla",
      category:1
    },
    {
        question:"¿Qué estructuras anatómicas delimitan la Fosa Craneal Media?",
        options:["Límite anterior: borde posterior del ala mayor del esfenoides. Límite posterior: apófisis clinoides anteriores y borde superior del peñasco.", "Límite anterior: borde posterior del frontal Límite posterior: apófisis estiloides y borde superior de la silla turca.", "Límite anterior: borde posterior del ala menor del esfenoides Límite posterior: apófisis clinoides posteriores, borde superior del peñasco.", "Límite anterior: borde posterior del ala menor del esfenoides. Límite posterior: apó�sis clinoides anteriores y borde inferior del peñasco."],
        answer:"Límite anterior: borde posterior del ala menor del esfenoides. Límite posterior: apófisis clinoides posteriores, borde superior del peñasco.",
        category:1
      },
    {
        question:"El músculo dorsal ancho, se inserta por su extremo humeral en:",
        options:["En el fondo de la corredera bicipital.", "El troquín.", "La cresta subtroquiniana.", "La cresta subtroquiteriana."],
        answer:"En el fondo de la corredera bicipital.",
        category:1
      },
    {
      question:"¿Cómo se clasifica la articulación sacroilíaca?",
      options:["Artrodia", "Diartroanfiatrosis", "Enartrosis", "Sutura"],
      answer:"Diartroanfiartrosis",
      category:1
    },
    {
        question:"Sólo una de las siguientes afirmaciones es correcta en relación al hueso fémur.",
        options:["La cabeza forma con la diáfisis un ángulo de aproximadamente 130º.", "La cabeza forma con la diáfisis un ángulo de aproximadamente 45º.", "Ambos cóndilos están a la misma altura.", "El hueso no posee canal medular."],
        answer:"La cabeza forma con la diá�sis un ángulo de aproximadamente 130º.",
        category:1
      },
    {
        question:"¿Qué huesos forman parte del muslo?",
        options:["Los huesos Fémur y Rótula.", "Los huesos Fémur, Rotula y Tibia.", "Los huesos Fémur y Tibia.", "Sólo el hueso Fémur."],
        answer:"Sólo el hueso Fémur.",
        category:1
      },
    {
      question:"¿Cual de los siguientes músculos forma la pared interna de la axila?",
      options:["Subescapular", "Coracobraquial", "Pectoral menor", "Serrato mayor"],
      answer:"Serrato mayor",
      category:1
    },
    {
        question:"Los orificios y conductos de 2do orden pertenecen:",
        options:["No se localizan en ninguna de estas estructuras", "Localizados en las diáfisis exclusivamente", "Se localizan exclusivamente en huesos planos", "Se localizan en los 3 tipos de huesos"],
        answer:"Se localizan en los 3 tipos de huesos",
        category:1
      },
    {
        question:"¿A qué se considera porción no articular de la cavidad cotiloidea?",
        options:["al techo del cótilo", "a la porción donde se inserta el ligamento redondo", "al isquion", "al la rama pubo femoral"],
        answer:"a la porción donde se inserta el ligamento redondo",
        category:1
      },
    {
      question:"¿Cómo se denomina de modo genérico a las articulaciones móviles?",
      options:["artrosis", "sinartrosis", "anfiartrosis", "diartrosis"],
      answer:"diartrosis",
      category:1
    },
    {
        question:"Con respecto al 1er metacarpiano marque la opción INCORRECTA.",
        options:["Su base articula con el trapezio", "Pertenece a la región de la palma de la mano", "Es el hueso metacarpiano mas movil", "Es un hueso corto"],
        answer:"Es un hueso corto",
        category:1
      },
    {
        question:"¿Cual de los siguientes músculos forma parte de la pared posterior de la axila?",
        options:["Pectoral menor", "Serrato mayor", "Coracobraquial", "Subescapular"],
        answer:"Subescapular",
        category:1
      },
    {
      question:"¿Qué elemento pasa por el agujero oval?",
      options:["Nervio mandibular", "Neumogastrico", "Arteria meningea media", "Ramo meingeo del trigemino"],
      answer:"Nervio mandibular",
      category:1
    },
    {
        question:"¿Qué musculo es el responsable de la abducción inicial del brazo desde la posición vertical o de reposo?",
        options:["Infraespinoso", "Supraespinoso", "Redondo menor", "Deltoides"],
        answer:"Supraespinoso",
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
  $progressValue+= 2.5;
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