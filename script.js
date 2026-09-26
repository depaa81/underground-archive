const records = [
  {
    id:"FILE // 17-A", title:"PROJECT_17", desc:"Fragmented records from an unidentified project.",
    content:`PROJECT 17 — CLASSIFIED

STATUS: ABANDONED
YEAR: 2009

Project 17 was a fictional experiment documented through
a series of incomplete archive entries.

The final entry contains only one sentence:

"THE NODE REMEMBERS."

All subsequent records were corrupted.

[END OF RECORD]`
  },
  {
    id:"FILE // 09-X", title:"SUBJECT_UNKNOWN", desc:"An incomplete fictional identity record.",
    content:`SUBJECT: UNKNOWN
STATUS: UNRESOLVED
LAST TRACE: 03:17:44

The subject appears in six unrelated fictional camera
records at exactly the same timestamp.

No matching identity exists in the archive.

A note was found beneath the final entry:

"STOP LOOKING FOR THE ORIGINAL."

[END OF RECORD]`
  },
  {
    id:"LOG // CAM-04", title:"CAM_04_LOG", desc:"Recovered surveillance log with unexplained gaps.",
    content:`CAMERA: 04
LOCATION: LOWER ARCHIVE

03:17:01 — corridor empty
03:17:09 — signal distortion
03:17:13 — unknown shadow detected
03:17:14 — feed lost
03:17:29 — feed restored

NOTE:
No physical camera was found at this location.

[END OF RECORD]`
  },
  {
    id:"CASE // 1997-17", title:"INCIDENT_1997", desc:"An old incident report with inconsistent timestamps.",
    content:`INCIDENT REPORT // 1997

A fictional archive node went offline for 11 minutes.

When the system returned, every timestamp had shifted
by exactly 17 seconds.

CAUSE: UNKNOWN
RESOLUTION: NONE

The original report ends before the investigation begins.

[END OF RECORD]`
  },
  {
    id:"NODE // 00-17", title:"LOST_NODE", desc:"A network node that should not exist.",
    content:`NODE ID: 00-00-17
PING: FAILED
ROUTE: UNKNOWN

A node continues to appear in the fictional network map,
but no connection can reach it.

Last response received:

"YOU ARE ALREADY HERE."

Connection terminated.

[END OF RECORD]`
  },
  {
    id:"BIN // NULL", title:"NULL_ARCHIVE", desc:"A corrupted fictional archive entry.",
    content:`ERROR: CONTENT NOT FOUND

The file exists.
The directory exists.
The index exists.

The content does not.

Repeated attempts to open the file return:

[ NULL ]
[ NULL ]
[ NULL ]

The archive has no explanation.

[END OF RECORD]`
  }
];

const grid=document.getElementById("archiveGrid");
const modal=document.getElementById("modal");
const fileCode=document.getElementById("fileCode");
const fileTitle=document.getElementById("fileTitle");
const fileContent=document.getElementById("fileContent");

records.forEach((r,i)=>{
  const card=document.createElement("article");
  card.className="card";
  card.innerHTML=`<div class="file-id">${r.id}</div><div class="lock">▣</div><h3>${r.title}</h3><p>${r.desc}</p>`;
  card.addEventListener("click",()=>openRecord(i));
  grid.appendChild(card);
});

function openRecord(i){
  const r=records[i];
  fileCode.textContent=r.id;
  fileTitle.textContent=r.title;
  fileContent.textContent=r.content;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
}
function closeRecord(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
}
document.getElementById("closeBtn").addEventListener("click",closeRecord);
modal.addEventListener("click",e=>{if(e.target===modal)closeRecord()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeRecord()});
