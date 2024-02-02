// Code your selectRandomEntry function here:

function selectRandomEntry(array) {
  let Index = Math.floor(Math.random() * array.length);
  return array[Index];
}
let idNumbers = [291, 414, 503, 599, 796, 890];

let selectedCandidates = [];
  for (i = 0; i < 3; i++) {
    let selection = selectRandomEntry(idNumbers);
    while (selectedCandidates.includes(selection)) {
      selection = selectRandomEntry(idNumbers);
    }
    selectedCandidates.push(selection);
  }
console.log(selectedCandidates.sort());

// Code your buildCrewArray function here:

function buildCrewArray(arr1, arr2) {
  let crewArray = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++){
      if (arr2[j].astronautID === arr1[i]) {
        crewArray.push(arr2[j]);
      }
    }
  }
  return crewArray
}



// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let crewAnnouncement = (buildCrewArray(selectedCandidates, animals));
console.log(`${crewAnnouncement[0].name}, ${crewAnnouncement[1].name}, and ${crewAnnouncement[2].name} are going to space!`);
