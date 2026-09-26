const bootScreen = document.getElementById("bootScreen");
const bootText = document.getElementById("bootText");

const terminalApp = document.getElementById("terminalApp");

const terminalOutput =
    document.getElementById("terminalOutput");

const commandInput =
    document.getElementById("commandInput");


/*
=========================================
BOOT SEQUENCE
=========================================
*/

const bootLines = [

    "[ BIOS ] BLACK TERMINAL SYSTEM",

    "[ BIOS ] initializing kernel...",

    "[ OK ] memory check",

    "[ OK ] filesystem mounted",

    "[ OK ] encrypted node detected",

    "[ OK ] terminal interface loaded",

    "",

    "WARNING: this is a fictional interface.",

    "NO REAL NETWORK ACCESS IS PERFORMED.",

    "",

    "Starting BLACK//TERMINAL..."

];


let bootIndex = 0;


function bootSequence() {

    if (bootIndex >= bootLines.length) {

        setTimeout(() => {

            bootScreen.classList.add("hidden");

            terminalApp.classList.remove("hidden");

            commandInput.focus();

        }, 700);

        return;
    }


    const line =
        document.createElement("div");

    line.textContent =
        bootLines[bootIndex];

    bootText.appendChild(line);

    bootIndex++;

    setTimeout(
        bootSequence,
        150
    );
}


bootSequence();


/*
=========================================
COMMAND DATA
=========================================
*/

const files = {

    "archive_01":

`ARCHIVE FILE 01

STATUS: CLASSIFIED
ORIGIN: UNKNOWN

This fictional record contains fragmented
information recovered from an abandoned node.

The final message says:

"THE SYSTEM KNOWS YOUR NAME."

No additional information exists.

[END OF FILE]`,


    "archive_02":

`ARCHIVE FILE 02

STATUS: CORRUPTED

03:17:01 — system normal
03:17:08 — signal distortion
03:17:13 — unknown process
03:17:14 — connection lost
03:17:29 — connection restored

NOTE:

There was no registered device
connected to the node.

[END OF FILE]`,


    "archive_03":

`ARCHIVE FILE 03

SUBJECT: UNKNOWN
STATUS: UNRESOLVED

The archive contains six identical
timestamps belonging to six different
fictional records.

All timestamps:

03:17:44

The reason remains unknown.

[END OF FILE]`,

};


/*
=========================================
HELP
=========================================
*/

function showHelp() {

    printLine("");

    printLine(
        "AVAILABLE COMMANDS",
        "green"
    );

    printLine("");

    printLine(
        "help        - show this help"
    );

    printLine(
        "clear       - clear terminal"
    );

    printLine(
        "status      - system status"
    );

    printLine(
        "about       - information"
    );

    printLine(
        "files       - list fictional files"
    );

    printLine(
        "open 01     - open archive 01"
    );

    printLine(
        "open 02     - open archive 02"
    );

    printLine(
        "open 03     - open archive 03"
    );

    printLine(
        "scan        - run fictional scan"
    );

    printLine(
        "disconnect  - disconnect session"
    );

    printLine("");

}


/*
=========================================
PRINT LINE
=========================================
*/

function printLine(
    text = "",
    className = ""
) {

    const line =
        document.createElement("div");

    line.className =
        `line ${className}`;

    line.textContent =
        text;

    terminalOutput.appendChild(line);

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
}


/*
=========================================
COMMAND HANDLER
=========================================
*/

function executeCommand(rawCommand) {

    const command =
        rawCommand
        .trim()
        .toLowerCase();


    if (!command) {
        return;
    }


    printLine(
        `root@black-node:~$ ${rawCommand}`,
        "command"
    );


    /*
    HELP
    */

    if (command === "help") {

        showHelp();

        return;
    }


    /*
    CLEAR
    */

    if (command === "clear") {

        terminalOutput.innerHTML = "";

        return;
    }


    /*
    STATUS
    */

    if (command === "status") {

        printLine("");

        printLine(
            "SYSTEM STATUS",
            "green"
        );

        printLine(
            "--------------------------------"
        );

        printLine(
            "NODE       : ONLINE"
        );

        printLine(
            "ENCRYPTION : ENABLED"
        );

        printLine(
            "ARCHIVES   : 03"
        );

        printLine(
            "UPTIME     : 17:44:09"
        );

        printLine(
            "THREAT     : UNKNOWN",
            "red"
        );

        printLine("");

        return;
    }


    /*
    ABOUT
    */

    if (command === "about") {

        printLine("");

        printLine(
            "BLACK//TERMINAL",
            "green"
        );

        printLine(
            "A fictional terminal experience."
        );

        printLine(
            "No real network activity occurs."
        );

        printLine("");

        return;
    }


    /*
    FILES
    */

    if (command === "files") {

        printLine("");

        printLine(
            "AVAILABLE ARCHIVES:",
            "green"
        );

        printLine(
            "archive_01.dat"
        );

        printLine(
            "archive_02.log"
        );

        printLine(
            "archive_03.bin"
        );

        printLine("");

        return;
    }


    /*
    OPEN FILE
    */

    if (command === "open 01") {

        showFile(
            files.archive_01
        );

        return;
    }


    if (command === "open 02") {

        showFile(
            files.archive_02
        );

        return;
    }


    if (command === "open 03") {

        showFile(
            files.archive_03
        );

        return;
    }


    /*
    SCAN
    */

    if (command === "scan") {

        runScan();

        return;
    }


    /*
    DISCONNECT
    */

    if (command === "disconnect") {

        disconnect();

        return;
    }


    /*
    UNKNOWN COMMAND
    */

    printLine(
        `command not found: ${rawCommand}`,
        "red"
    );

}


/*
=========================================
SHOW FILE
=========================================
*/

function showFile(content) {

    printLine("");

    const lines =
        content.split("\n");

    let index = 0;


    function typeFile() {

        if (index >= lines.length) {

            printLine("");

            return;
        }


        printLine(
            lines[index],
            index === 0
                ? "green"
                : ""
        );

        index++;

        setTimeout(
            typeFile,
            30
        );
    }


    typeFile();

}


/*
=========================================
FAKE SCAN
=========================================
*/

function runScan() {

    printLine("");

    printLine(
        "INITIALIZING FICTIONAL SCAN...",
        "green"
    );


    const scanMessages = [

        "checking local node...",

        "checking archive index...",

        "checking encrypted records...",

        "checking unknown processes...",

        "checking hidden directories..."

    ];


    let index = 0;


    function nextScan() {

        if (
            index >=
            scanMessages.length
        ) {

            printLine("");

            printLine(
                "SCAN COMPLETE",
                "green"
            );

            printLine(
                "RESULT: NO REAL NETWORK WAS ACCESSED."
            );

            printLine("");

            return;
        }


        printLine(
            `[SCAN] ${scanMessages[index]}`
        );

        index++;

        setTimeout(
            nextScan,
            500
        );
    }


    nextScan();

}


/*
=========================================
DISCONNECT
=========================================
*/

function disconnect() {

    printLine("");

    printLine(
        "terminating session...",
        "yellow"
    );


    setTimeout(() => {

        terminalApp.classList.add("glitch");

        printLine(
            "connection terminated.",
            "red"
        );

        printLine("");

        commandInput.disabled = true;

    }, 700);

}


/*
=========================================
KEYBOARD
=========================================
*/

commandInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            const command =
                commandInput.value;

            executeCommand(command);

            commandInput.value = "";

        }

    }
);


/*
=========================================
CLICK ANYWHERE
FOCUS TERMINAL
=========================================
*/

document.addEventListener(
    "click",
    function() {

        if (
            !commandInput.disabled &&
            !bootScreen.classList.contains("hidden")
        ) {
            return;
        }

        commandInput.focus();

    }
);
