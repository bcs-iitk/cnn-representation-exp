//Text dump

// code is below this : Just have to run the function 'runForms' in the apps script environment. 

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
;
 var  one_sent = ["Occasionally loud and offensive , but more often , it simply lulls you into a gentle waking coma .",
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
    
 var   two_sent = ["It makes sense that he went back to school to check out the girls -- his film is a frat boy 's idea of a good time .",
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
    ;
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
   ; 
 var  four_sent = ["Delia , Greta , and Paula rank as three of the most multilayered and sympathetic female characters of the year .",
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
   ;

var index = 1; // 1 because we will skip the column name row (first row)

function sentenceReturn(sent, num){
  if(sent === 0)
    return zero_sent[num];
  if(sent === 1)
    return one_sent[num];
  if(sent === 2)
    return two_sent[num];
  if(sent === 3)
    return three_sent[num];
  if(sent === 4)
    return four_sent[num];
}

function getData(url) {
  var values = SpreadsheetApp.openByUrl(url).getActiveSheet().getDataRange().getValues();
  return values;
}

function readSheet(sheet_string) {
  var sheet = getData(sheet_string);
  var range = sheet.getDataRange();
  var values = range.getValues();
  return values;
}

var values = getData('https://docs.google.com/spreadsheets/d/15T8bvfrrPqsTLGuLpAEfCP9w8_EUuggZX0oEx9Q8F_k/edit');
var indices_list = getData('https://docs.google.com/spreadsheets/d/1fy4KwSPmpBdQEtGHw1s94lnRZ0P-SKH4ahpytyFzvE0/edit');

function createForm(form_string) {  
   
  // create & name Form  
  
   var item = "Movie Review Comparison";  
   var desc = "We're conducting an experiment on sentiment similarity here at Brain and Cognitive Society, IITK. The following are some movie reviews from Rotten Tomatoes. In each question, you are given two reviews. Rate how similar the two reviews feel on a scale of 1-10.";
   var form = FormApp.openByUrl(form_string);
   var items = form.getItems();
  
  // clear out the form first
  
   while(items.length > 0){
      form.deleteItem(items.pop());
   }
  
   //form title and description
  
  form.setTitle(item)
       .setDescription(desc);  
  var i;
  var j;
  var NUM_QUESTIONS = 30;

  var row_for_values, col_for_values;
  
  for(i=0; i<NUM_QUESTIONS; i++) {
    
    row_for_values = indices_list[index][1] + 1;
    col_for_values = indices_list[index][2] + 1;  // +1 to skip over column name row (first row) in values
    
    var item_linear = form.addScaleItem();
    
    // The linear scale question : 
    item_linear.setTitle("1)  " + sentenceReturn(values[row_for_values][1], values[row_for_values][2]) +  "\n\n" + "2)  " + sentenceReturn(values[col_for_values][1], values[col_for_values][2]))
    .setBounds(1, 10)
    .setLabels("Very dissimilar", "Very similar");
               
    index = index + 1; 
    
    //add a pagebreak after every 10 questions
    
    if((i%10 === 9) && (i!=NUM_QUESTIONS -1)) { 
      form.addPageBreakItem()
      .setHelpText("For each question, choose a number between 1 (very dissimilar) & 10 (very similar) .");      
    }
    
  }

 }

function runForms() {
  
  var webpages = [];
  webpages.push("https://docs.google.com/forms/d/15aAHnCCMdKGniCv-vkcLg4PRfBScH9hhjSD8wkk5N-Q/edit");
  webpages.push("https://docs.google.com/forms/d/1R-A7FcBbu9RnZ1s4b8qxl9t8CS6Gi3IJVv7QcZQHzo4/edit");
  webpages.push("https://docs.google.com/forms/d/1aSTyxlWiyLxfvDYvCosnPlDJ7ruudMVBpgoaTW-kFRY/edit");
  webpages.push("https://docs.google.com/forms/d/1J3zEmqanM6eODGwv5fFOrni-3aJM30JlHLpaNF3tkKM/edit");
  webpages.push("https://docs.google.com/forms/d/1JBcn7Ka5PqQ0Y9Y3fL7YPMvLoT_nc4XcBVaEa6N0VEU/edit");
  webpages.push("https://docs.google.com/forms/d/1JjZ51FOzdKKcjMbfKU5zBj1BAbloD9ajSslIPPx1WZM/edit");
  webpages.push("https://docs.google.com/forms/d/1cmectE48eJngodP0FKlc-M_K7s2ZOoHqA_mmn6YIITQ/edit");
  webpages.push("https://docs.google.com/forms/d/1mHlI-SHYoI4DgwYP9zi5gQVpNn3Dl4RIRg5EVUlbbZc/edit");
  webpages.push("https://docs.google.com/forms/d/1LuFVXtogmkZYbMhmamXyc6kuBl4DXU-U9dKvojhwanA/edit");
  webpages.push("https://docs.google.com/forms/d/1_KBjU3rf3cWaOdySb9avpEZLnnl49d6qTcn3BjhjW4w/edit");
  
  var form_no;
  createForm(webpages[0], 1);  
//  for (form_no = 1; form_no <= 5; form_no++) {
//    createForm(webpages[form_no - 1], form_no);
//  }

}


