    var git_repo_dir = 'https://bcs-iitk.github.io/color-context/online_exp/'
    var num_stimuli = 2
    var stimuli_start_idx = 1
    
    // all the sentences:
    
    var zero_sent = ["I 've had more interesting -- and , dare I say , thematically complex -- bowel movements than this long-on-the-shelf , point-and-shoot exercise in gimmicky crime drama ",
    "Punch-Drunk Love is so convinced of its own brilliance that , if it were a person , you 'd want to smash its face in.",
    "A laughable -- or rather , unlaughable -- excuse for a film .",
    "My precious new Star Wars movie is a lumbering , wheezy drag ...",
    "Dripping with cliche and bypassing no opportunity to trivialize the material .",
    "New ways of describing badness need to be invented to describe exactly how bad it is .",
    "It is messy , uncouth , incomprehensible , vicious and absurd .",
    "Will probably be one of those movies barely registering a blip on the radar screen of 2002 .",
    "This painfully unfunny farce traffics in tired stereotypes and encumbers itself with complications ... that have no bearing on the story .",
    "The main characters are simply named The Husband , The Wife and The Kidnapper , emphasizing the disappointingly generic nature of the entire effort .",
    "The kind of film that leaves you scratching your head in amazement over the fact that so many talented people could participate in such an ill-advised and poorly executed idea .",
    "A sleep-inducingly slow-paced crime drama with clumsy dialogue , heavy-handed phoney-feeling sentiment , and an overly-familiar set of plot devices ."];

    var one_sent = ["Occasionally loud and offensive , but more often , it simply lulls you into a gentle waking coma .",
    "There 's little to recommend Snow Dogs , unless one considers cliched dialogue and perverse escapism a source of high hilarity .",
    "Even fans of Ismail Merchant 's work , I suspect , would have a hard time sitting through this one .",
    "Narratively , Trouble Every Day is a plodding mess .",
    "Simply put , there should have been a more compelling excuse to pair Susan Sarandon and Goldie Hawn .",
    "No , I don't know why Steven Seagal is considered a star , nor why he keeps being cast in action films when none of them are ever any good or make any money .",
    "a genre that 's already a joke in the United States .",
    "This movie ... doesn't deserve the energy it takes to describe how bad it is .",
    "The film does n't really care about the thousands of Americans who die hideously , it cares about how Ryan meets his future wife and makes his start at the CIA .",
    "Sometimes there are very , very good reasons for certain movies to be sealed in a jar and left on a remote shelf indefinitely .",
    "None of this so-called satire has any sting to it , as if Woody is afraid of biting the hand that has finally , to some extent , warmed up to him .",
    "A film that suffers because of its many excesses ."]
    
    var two_sent = ["It makes sense that he went back to school to check out the girls -- his film is a frat boy 's idea of a good time .",
    "It pulls the rug out from under you , just when you 're ready to hate one character , or really sympathize with another character , something happens to send you off in different direction .",
    "The respective charms of Sandra Bullock and Hugh Grant have worn threadbare .",
    "The whole affair is as predictable as can be .",
    "While this has the making of melodrama , the filmmaker cuts against this natural grain , producing a work that 's more interested in asking questions than in answering them .",
    "If you adored The Full Monty so resoundingly that you 're dying to see the same old thing in a tired old setting , then this should keep you reasonably entertained .",
    "Opening with some contrived banter , cliches and some loose ends , the screenplay only comes into its own in the second half .",
    "Everything its title implies , a standard-issue crime drama spat out from the Tinseltown assembly line .",
    "The uneven movie does have its charms and its funny moments but not quite enough of them .",
    "A somewhat disappointing and meandering saga .",
    "Entertainment more disposable than Hanna-Barbera 's half-hour cartoons ever were .",
    "Curling may be a unique sport but Men with Brooms is distinctly ordinary ."]
    
    var three_sent = ["A welcome relief from baseball movies that try too hard to be mythic , this one is a sweet and modest and ultimately winning story .",
    "Fresnadillo has something serious to say about the ways in which extravagant chance can distort our perspective and throw us off the path of good sense .",
    "A positively thrilling combination of ethnography and all the intrigue , betrayal , deceit and murder of a Shakespearean tragedy or a juicy soap opera .",
    "Provides a satisfactory overview of the bizarre world of extreme athletes as several daredevils express their own views .",
    "Kwan is a master of shadow , quietude , and room noise , and Lan Yu is a disarmingly lived-in movie .",
    "Even when it drags , we are forced to reflect that its visual imagination is breathtaking",
    "It 's consistently funny , in an irresistible junior-high way , and consistently free of any gag that would force you to give it a millisecond of thought .",
    "More good than great but Freeman and Judd make it work .",
    "I admire the closing scenes of the film , which seem to ask whether our civilization offers a cure for Vincent 's complaint .",
    "A brilliant , absurd collection of vignettes that , in their own idiosyncratic way , sum up the strange horror of life in the new millennium .",
    "It 's touching and tender and proves that even in sorrow you can find humor .",
    "Oddly , the film is n't nearly as downbeat as it sounds , but strikes a tone that 's alternately melancholic , hopeful and strangely funny ."]
    
    var four_sent = ["Delia , Greta , and Paula rank as three of the most multilayered and sympathetic female characters of the year .",
    "Washington as possibly the best actor working in movies today",
    "It is most remarkable not because of its epic scope , but because of the startling intimacy it achieves despite that breadth .",
    "An emotionally strong and politically potent piece of cinema .",
    "Romantic , riveting and handsomely animated .",
    "The film 's constant mood of melancholy and its unhurried narrative are masterfully controlled .",
    "Treasure Planet rivals the top Japanese animations of recent vintage .",
    "Standing in the Shadows of Motown is the best kind of documentary , one that makes a depleted yesterday feel very much like a brand-new tomorrow .",
    "A visual spectacle full of stunning images and effects .",
    "Insomnia is one of the year 's best films and Pacino gives one of his most daring , and complicated , performances .",
    "This gorgeous epic is guaranteed to lift the spirits of the whole family .",
    "If you 're not deeply touched by this movie , check your pulse ."]

    var scale = [];
    var i;
    var x ;
    var sent;
    var questions = [];
    
    for (i = 0; i < 10; i++) {
      sent =  Math.floor(Math.random() * (4 - 0 + 1)) + 0;
      if(sent === 0) {
         x = Math.floor((Math.random() * 10) + 1);
         scale.push(zero_sent[x]);
         questions.push("Senti-" + sent.toString() +  ": No.-" + x.toString());
      }
      if(sent === 1) {
         x = Math.floor((Math.random() * 10) + 1);
         scale.push(one_sent[x]);
         questions.push("Senti-" + sent.toString() +  ": No.-" + x.toString());
      }
      if(sent === 2) {
         x = Math.floor((Math.random() * 10) + 1);
         scale.push(two_sent[x]);
         questions.push("Senti-" + sent.toString() +  ": No.-" + x.toString());
      }
      if(sent === 3) {
         x = Math.floor((Math.random() * 10) + 1);
         scale.push(three_sent[x]);
         questions.push("Senti-" + sent.toString() +  ": No.-" + x.toString());
      }
      if(sent === 4) {
         x = Math.floor((Math.random() * 10) + 1);
         scale.push(four_sent[x]);
         questions.push("Senti-" + sent.toString() +  ": No.-" + x.toString());
      }
    }

    // Generate the list of stimuli from images...
    var stim = [];
    for (i = stimuli_start_idx; i < num_stimuli+stimuli_start_idx; i++) {
          x = Math.floor((Math.random() * 10) + 1);
          stim.push(one_sent[x]);
//        stim.push("I've had more interesting -- and , dare I say , thematically complex -- bowel movements than this long-on-the-shelf , point-and-shoot exercise in gimmicky crime drama."><br><br><br>');
    }

    // Create jsPsych timeline
    var timeline = [];
    var instructions = {
      type: 'html-button-response',
      stimulus: '<p>Add some instructions related to the experiment</p>',
      choices: ['Ready to start']
    }
    timeline.push(instructions);

    for (i = stimuli_start_idx; i < num_stimuli+stimuli_start_idx; i++) {
      timeline.push({
        type: 'html-button-response',
        stimulus: stim[i-1],
        choices: scale,
        prompt: "<p>What color will you associate to this picture?</p>"
      });
    }

//    function save_data(){
//      var all_data = jsPsych.data.get();
//      google.script.run.saveData(all_data.select('button_pressed').values);
//    }
    function save_questions(questions) {
      var all_data = jsPsych.data.get();
      google.script.run.saveQuestions(questions, all_data.select('button_pressed').values);

    }
    

    var instructions = {
      type: 'html-button-response',
      stimulus: '<p>Thank you for completing this survey! Kindly press the Send button to send the data to us</p>',
      choices: ['Send'],
      on_finish: function() {
          save_questions(questions);
//          save_data();
      }
    }
    timeline.push(instructions);

    // Start the jsPsych experiment
    jsPsych.init({
      timeline: timeline,
      show_progress_bar: true,
    });
