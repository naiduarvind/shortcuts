var shortcuts = [
  {
    description: "Display [Open file] dialog box",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "O" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "O" }
    ]
  },
  {
    description: "Cut the active cells to the clipboard",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "X" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "X" }
    ]
  },
  {
    description: "Copy the active cells to the clipboard",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "C" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "C" }
    ]
  },
  {
    description: "Paste the copied contents from the clipboard",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "V" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "V" }
    ]
  },
  {
    description: "Undo the last action",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Z" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Z" }
    ]
  },
  {
    description: "Redo the last action",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Y" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Y" }
    ]
  },
  {
    description: "Switch bold formatting",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "B" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "B" }
    ]
  },
  {
    description: "Switch italic formatting",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "I" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "I" }
    ]
  },
  {
    description: "Switch underlining",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "U" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "U" }
    ]
  },
  {
    description: "Switch strikethrough formatting",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "5" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "X" }
    ]
  },
  {
    description: "Display [Find] dialog box",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F" }
    ]
  },
  {
    description: "Display [Print] dialog box",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "P" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "P" }
    ]
  },
  {
    description: "Save workbooks",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "S" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "S" }
    ]
  },
  {
    description: "Display [Save As] dialog box",
    category: "Useful Excel shortcut keys",
    windows: [{ type: "symbol", val: "F12" }],
    mac: [{ type: "symbol", val: "F12" }]
  },
  {
    description: "Quit Excel",
    category: "Useful Excel shortcut keys",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F4" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Q" }
    ]
  },
  {
    description: "Display [Help]",
    category: "Useful Excel shortcut keys",
    windows: [{ type: "symbol", val: "F1" }],
    mac: [{ type: "symbol", val: "F1" }]
  },
  {
    description: "Switch filter",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "L" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F" }
    ]
  },
  {
    description: "Display the access keys for the ribbon commands",
    category: "Shortcut keys for general functions",
    windows: [{ type: "symbol", val: "Alt" }],
    mac: []
  },
  {
    description: "Move the focus to the next commands on the ribbon",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "Tab" }
    ],
    mac: []
  },
  {
    description: "Show or Hide the ribbon",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F1" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "R" }
    ]
  },
  {
    description: "Display the right-click menu",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F10" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F10" }
    ]
  },
  {
    description: "Switch the full screen mode",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "V" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "U" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F" }
    ]
  },
  {
    description: "Exit the full screen mode",
    category: "Shortcut keys for general functions",
    windows: [{ type: "symbol", val: "Esc" }],
    mac: [{ type: "symbol", val: "esc" }]
  },
  {
    description: "Close dialog boxs, message windows etc",
    category: "Shortcut keys for general functions",
    windows: [{ type: "symbol", val: "Esc" }],
    mac: [{ type: "symbol", val: "esc" }]
  },
  {
    description: "Move to the right tab in a dialog boxes",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Tab" }
    ],
    mac: []
  },
  {
    description: "Move to the left tab in a dialog box",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Tab" }
    ],
    mac: []
  },
  {
    description: "Operate the functions in a dialog box",
    category: "Shortcut keys for general functions",
    windows: [{ type: "symbol", val: "Enter" }],
    mac: [{ type: "symbol", val: "return" }]
  },
  {
    description: "Minimize Excel windows",
    category: "Shortcut keys for general functions",
    windows: [],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "H" }
    ]
  },
  {
    description: "Display [Print] tab in the Backstage view",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F2" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F2" }
    ]
  },
  {
    description: "Open [Smart Lookup]",
    category: "Shortcut keys for general functions",
    windows: [],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "L" }
    ]
  },
  {
    description: "Display [File] and Backstage view",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "F" }
    ],
    mac: []
  },
  {
    description: "Display [Home] tab in ribbon",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "H" }
    ],
    mac: []
  },
  {
    description: "Display [Insert] tab in ribbon",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "N" }
    ],
    mac: []
  },
  {
    description: "Display [Page Layout] tab in ribbon",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "P" }
    ],
    mac: []
  },
  {
    description: "Display [Data] tab in ribbon",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "A" }
    ],
    mac: []
  },
  {
    description: "Display [Review] tab in ribbon",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "R" }
    ],
    mac: []
  },
  {
    description: "Display [View] tab in ribbon",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "W" }
    ],
    mac: []
  },
  {
    description: "Show or hide objects",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "6" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "6" }
    ]
  },
  {
    description:
      "Switch floating shapes such as text boxes, shapes or pictures",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "5" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "Tab" }
    ],
    mac: []
  },
  {
    description: "Exit the floating shape navigation",
    category: "Shortcut keys for general functions",
    windows: [{ type: "symbol", val: "Esc" }],
    mac: [{ type: "symbol", val: "esc" }]
  },
  {
    description: "Display [Thesaurus] dialog box",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F7" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F7" }
    ]
  },
  {
    description: "Check spelling",
    category: "Shortcut keys for general functions",
    windows: [{ type: "symbol", val: "F7" }],
    mac: [{ type: "symbol", val: "F7" }]
  },
  {
    description: "Display [Quick Analysis Tool] dialog box",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Q" }
    ],
    mac: []
  },
  {
    description: "Display [Insert] dialog box to insert rows, columns or cells",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "+" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "=" }
    ]
  },
  {
    description: "Display [Delete] dialog box to delet rows, columns or cells",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "–" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "–" }
    ]
  },
  {
    description: "Show or hide outline signs",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "8" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "8" }
    ]
  },
  {
    description: "Display [Error Checking] menu",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F10" }
    ],
    mac: []
  },
  {
    description: "Display [Create Names] dialog box",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F3" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F3" }
    ]
  },
  {
    description: "Display [Name Manager] dialog box",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F3" }
    ],
    mac: []
  },
  {
    description: "Display [Define Name] dialog box",
    category: "Shortcut keys for general functions",
    windows: [],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F3" }
    ]
  },
  {
    description: "Display [Define Name] dialog box",
    category: "Shortcut keys for general functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "M" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "M" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "D" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "L" }
    ]
  },
  {
    description: "Display [Paste Name] dialog box",
    category: "Shortcut keys for general functions",
    windows: [{ type: "symbol", val: "F3" }],
    mac: []
  },
  {
    description: "Create a new blank workbook",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "N" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "N" }
    ]
  },
  {
    description: "Create a new workbook from templates",
    category: "Shortcut keys for workbooks",
    windows: [],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "P" }
    ]
  },
  {
    description: "Close the active workbook window",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "W" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "W" }
    ]
  },
  {
    description: "Display control menu for a workbook window",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Space" }
    ],
    mac: []
  },
  {
    description: "Minimize the active workbook window",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "9" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "9" }
    ]
  },
  {
    description: "Restore the size of the active window",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F5" }
    ],
    mac: []
  },
  {
    description: "Mixmize or restore the size of the active window",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F10" }
    ],
    mac: [
      { type: "symbol", val: "⌘ " },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F10" }
    ]
  },
  {
    description: "Perform [Size] command when it’s not maximized",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F8" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F8" }
    ]
  },
  {
    description: "For Mac, expand in lengthwise, then in widthwise",
    category: "Shortcut keys for workbooks",
    windows: [],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F8" }
    ]
  },
  {
    description: "Move the active window, when it’s not miximized",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F7" }
    ],
    mac: []
  },
  {
    description: "Switch to the next book window",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F6" }
    ],
    mac: []
  },
  {
    description: "Calculate all worksheets in all open workbook",
    category: "Shortcut keys for workbooks",
    windows: [{ type: "symbol", val: "F9" }],
    mac: [{ type: "symbol", val: "F9" }]
  },
  {
    description:
      "Calculate all worksheets in all open workbook regardless of any changes since the last calculation",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F9" }
    ],
    mac: []
  },
  {
    description:
      "Recalculate all open workbooks includes cells which are not marked for calculation",
    category: "Shortcut keys for workbooks",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F9" }
    ],
    mac: []
  },
  {
    description: "Insert a new worksheet in the active workbook",
    category: "Shortcut keys for worksheets",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F11" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F11" }
    ]
  },
  {
    description: "Move to the right worksheet",
    category: "Shortcut keys for worksheets",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Pageup" }
    ],
    mac: [
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "" }
    ]
  },
  {
    description: "Move to the left worksheet",
    category: "Shortcut keys for worksheets",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Pagedown" }
    ],
    mac: [
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "←" }
    ]
  },
  {
    description: "Select the active worksheet and the left one",
    category: "Shortcut keys for worksheets",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Pageup" }
    ],
    mac: []
  },
  {
    description: "Select the active worksheet and the right one",
    category: "Shortcut keys for worksheets",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Pagedown" }
    ],
    mac: []
  },
  {
    description:
      "Move between the ribbon, the window, the worksheet and the zoon control (Including split windows)",
    category: "Shortcut keys for worksheets",
    windows: [{ type: "symbol", val: "F6" }],
    mac: []
  },
  {
    description:
      "Move between the ribbon, the window, the worksheet and the zoom control",
    category: "Shortcut keys for worksheets",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F6" }
    ],
    mac: []
  },
  {
    description: "Calculate the active worksheet",
    category: "Shortcut keys for worksheets",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F9" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F9" }
    ]
  },
  {
    description: "Move one cell up",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "↑" }],
    mac: [{ type: "symbol", val: "↑" }]
  },
  {
    description: "Move one cell down",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "↓" }],
    mac: [{ type: "symbol", val: "↓" }]
  },
  {
    description: "Move one cell left",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "←" }],
    mac: [{ type: "symbol", val: "←" }]
  },
  {
    description: "Move one cell right",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "→" }],
    mac: [{ type: "symbol", val: "→" }]
  },
  {
    description: "Move to the right cell",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "Tab" }],
    mac: [{ type: "symbol", val: "tab" }]
  },
  {
    description: "Move to the left cell",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Tab" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "tab" }
    ]
  },
  {
    description: "Scroll one screen up",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "PageUp" }],
    mac: [
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" }
    ]
  },
  {
    description: "Scroll one screen down",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "PageDown" }],
    mac: [
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↓" }
    ]
  },
  {
    description: "Scroll one screen left",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Pageup" }
    ],
    mac: [
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" }
    ]
  },
  {
    description: "Scroll one screen right",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Pagedown" }
    ],
    mac: [
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↓" }
    ]
  },
  {
    description: "Move to the first cell in a work sheet",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Home" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "←" }
    ]
  },
  {
    description: "Move to the last cell in a work sheet",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "End" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "" }
    ]
  },
  {
    description: "Move to the first row",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "Home" }],
    mac: [
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "←" }
    ]
  },
  {
    description: "Move to the upepr left corner when scroll lock is on",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Home" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "ScrollLock" }
    ],
    mac: []
  },
  {
    description: "Move to the top in the data range",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" }
    ]
  },
  {
    description: "Move to the last in the data range",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↓" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↓" }
    ]
  },
  {
    description: "Move to the left edge in the data range",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "←" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "←" }
    ]
  },
  {
    description: "Move to the right edge in the data range",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "" }
    ]
  },
  {
    description: "Move the cursor to the last in the formula bar",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "End" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "operator", val: "→" }
    ]
  },
  {
    description: "Move to one cell up within the selected ranges",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "Enter" }],
    mac: [{ type: "symbol", val: "return" }]
  },
  {
    description: "Move to one cell down within the selected ranges",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Enter" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "return" }
    ]
  },
  {
    description: "Move to one cell right within the selected ranges",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "Tab" }],
    mac: [{ type: "symbol", val: "tab" }]
  },
  {
    description: "Move to one cell left within the selected ranges",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Tab" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "tab" }
    ]
  },
  {
    description: "Move to the next corner colockwise",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "." }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "." }
    ]
  },
  {
    description: "Display [Go To] dialog",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "F5" }],
    mac: [{ type: "symbol", val: "F5" }]
  },
  {
    description: "Scroll and move to the active cell",
    category: "Shortcut keys for navigation",
    windows: [],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "delete" }
    ]
  },
  {
    description: "Go to the submenu from the main menu",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "" }
    ],
    mac: []
  },
  {
    description: "Go to the next command in the main menu or the submenu",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "↓" }],
    mac: []
  },
  {
    description: "Move to the next in ribbon",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "↑" },
      { type: "symbol", val: "↓" },
      { type: "symbol", val: "←" },
      { type: "symbol", val: "→" }
    ],
    mac: []
  },
  {
    description: "Scroll the worksheet up and down, left and right",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "ScrollLock" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" },
      { type: "symbol", val: "↓" },
      { type: "symbol", val: "←" },
      { type: "symbol", val: "→" }
    ],
    mac: []
  },
  {
    description: "Move to the next option or option group in a dialog box",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "Tab" }],
    mac: [{ type: "symbol", val: "tab" }]
  },
  {
    description: "Move in the active drop-down list in a dialog box",
    category: "Shortcut keys for navigation",
    windows: [
      { type: "symbol", val: "↑" },
      { type: "symbol", val: "↓" },
      { type: "symbol", val: "←" },
      { type: "symbol", val: "→" }
    ],
    mac: [
      { type: "symbol", val: "↑" },
      { type: "symbol", val: "↓" },
      { type: "symbol", val: "←" },
      { type: "symbol", val: "→" }
    ]
  },
  {
    description: "Turn the End mode on or off",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "End" }],
    mac: [
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "" }
    ]
  },
  {
    description: "Move to the first field of the next record in a data from",
    category: "Shortcut keys for navigation",
    windows: [{ type: "symbol", val: "Enter" }],
    mac: []
  },
  {
    description: "Expand selected range by one cell",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" },
      { type: "symbol", val: "↓" },
      { type: "symbol", val: "←" },
      { type: "symbol", val: "→" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" },
      { type: "symbol", val: "↓" },
      { type: "symbol", val: "←" },
      { type: "symbol", val: "→" }
    ]
  },
  {
    description: "Select the entire worksheet",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "A" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "A" }
    ]
  },
  {
    description:
      "Select the current region when data is contained in the worksheet",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Space" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "space" }
    ]
  },
  {
    description:
      "Select the current region and its summaries when data is contained in the worksheet",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Space" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "Space" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "space" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "space" }
    ]
  },
  {
    description: "Select the entire worksheet",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Space" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "Space" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "Space" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "space" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "space" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "space" }
    ]
  },
  {
    description: "Select all objects when a object is selected",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Space" }
    ],
    mac: []
  },
  {
    description: "Select the entire row",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Space" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "space" }
    ]
  },
  {
    description: "Select the entire column",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Space" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "space" }
    ]
  },
  {
    description: "Expand the selected range to the top call of the row",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Home" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "←" }
    ]
  },
  {
    description: "Expand the selected range to the beginning of the worksheet",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Home" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "←" }
    ]
  },
  {
    description: "Expand the selected range to the end of the worksheet",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "End" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "" }
    ]
  },
  {
    description: "Expand the selected range one screen up",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Pageup" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" }
    ]
  },
  {
    description: "Expand the selected range one screen down",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "PageDown" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↓" }
    ]
  },
  {
    description: "Select all cells with commnets",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "O" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "O" }
    ]
  },
  {
    description: "Select text from the cursor to the last in the formula bar",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "End" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "operator", val: "→" }
    ]
  },
  {
    description: "Turn the extend selection mode on or off",
    category: "Shortcut keys for selection",
    windows: [{ type: "symbol", val: "F8" }],
    mac: [{ type: "symbol", val: "F8" }]
  },
  {
    description: "Select from the active cell to the cell which has data",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: ":" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: ":" }
    ]
  },
  {
    description:
      "Expand selected range to the last cell which has data in the same row or the same column",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" },
      { type: "symbol", val: "↓" },
      { type: "symbol", val: "←" },
      { type: "symbol", val: "→" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" },
      { type: "symbol", val: "↓" },
      { type: "symbol", val: "←" },
      { type: "symbol", val: "→" }
    ]
  },
  {
    description: "Select the cells which have data around the active cell",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "*" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "*" }
    ]
  },
  {
    description:
      "Select the cells which have the different value from the active cell in the same row",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "|" }
    ],
    mac: []
  },
  {
    description:
      "Select the cells which have the different value from the active cell in the same column",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "|" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "|" }
    ]
  },
  {
    description: "Select the array includes the active cell",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "/" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "/" }
    ]
  },
  {
    description:
      "Select the cells with formulas refering to the active cell directly",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "[" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "[" }
    ]
  },
  {
    description:
      "Select the cells with formulas refering to the active cell directly or indirectly",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "[" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "{" }
    ]
  },
  {
    description:
      "Select the cells with formulas which refer to the selected range directly",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "]" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "]" }
    ]
  },
  {
    description:
      "Select the cells with formulas which refer to the selected range directly or in directly",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "]" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "}" }
    ]
  },
  {
    description: "Add discontiguous cells to the selected range",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F8" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F8" }
    ]
  },
  {
    description:
      "Select cells which have different values from the active cell in a row",
    category: "Shortcut keys for selection",
    windows: [],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "\\" }
    ]
  },
  {
    description: "Select the active cell when many cells are selected",
    category: "Shortcut keys for selection",
    windows: [],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "delete" }
    ]
  },
  {
    description: "Delete the selected ranges",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "–" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "–" }
    ]
  },
  {
    description: "Select the top command in the main or sub menu",
    category: "Shortcut keys for selection",
    windows: [{ type: "symbol", val: "Home" }],
    mac: []
  },
  {
    description: "Select the last command in the main or sub menu",
    category: "Shortcut keys for selection",
    windows: [{ type: "symbol", val: "End" }],
    mac: []
  },
  {
    description: "Open the selected menu",
    category: "Shortcut keys for selection",
    windows: [{ type: "symbol", val: "Enter" }],
    mac: []
  },
  {
    description: "Activate the selected button",
    category: "Shortcut keys for selection",
    windows: [{ type: "symbol", val: "Enter" }],
    mac: []
  },
  {
    description: "Display the list of the selected command",
    category: "Shortcut keys for selection",
    windows: [{ type: "symbol", val: "↓" }],
    mac: []
  },
  {
    description: "Display the selected drop-down list",
    category: "Shortcut keys for selection",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↓" }
    ],
    mac: []
  },
  {
    description: "Edit the active cell",
    category: "Shortcut keys for data entry",
    windows: [{ type: "symbol", val: "F2" }],
    mac: [{ type: "symbol", val: "F2" }]
  },
  {
    description: "Edit the active cell and place the cursor at the end",
    category: "Shortcut keys for data entry",
    windows: [],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "U" }
    ]
  },
  {
    description: "Edit the active cell and place the cursor at the end",
    category: "Shortcut keys for data entry",
    windows: [{ type: "symbol", val: "BackSpace" }],
    mac: [{ type: "symbol", val: "delete" }]
  },
  {
    description:
      "Delete a charactor to the left of the cursor or selected text",
    category: "Shortcut keys for data entry",
    windows: [{ type: "symbol", val: "Delete" }],
    mac: [
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "delete" }
    ]
  },
  {
    description: "Delete the contents in an active cell",
    category: "Shortcut keys for data entry",
    windows: [{ type: "symbol", val: "BackSpace" }],
    mac: [{ type: "symbol", val: "delete" }]
  },
  {
    description: "Delete the contents but keep formats and comments in cells",
    category: "Shortcut keys for data entry",
    windows: [{ type: "symbol", val: "Delete" }],
    mac: [{ type: "symbol", val: "delete" }]
  },
  {
    description: "Delete the left charactor of cursor or selected charactors",
    category: "Shortcut keys for data entry",
    windows: [{ type: "symbol", val: "BackSpace" }],
    mac: [{ type: "symbol", val: "delete" }]
  },
  {
    description: "Exit edit mode and select one cell below",
    category: "Shortcut keys for data entry",
    windows: [{ type: "symbol", val: "Enter" }],
    mac: [{ type: "symbol", val: "return" }]
  },
  {
    description: "Delete entry in cells or the formula bar",
    category: "Shortcut keys for data entry",
    windows: [{ type: "symbol", val: "Esc" }],
    mac: [{ type: "symbol", val: "esc" }]
  },
  {
    description: "Complete a cell entry and move one cell down",
    category: "Shortcut keys for data entry",
    windows: [{ type: "symbol", val: "Enter" }],
    mac: [{ type: "symbol", val: "return" }]
  },
  {
    description: "Complete a cell entry and move one cell up",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Enter" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "return" }
    ]
  },
  {
    description: "Enter the current time",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: ":" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: ";" }
    ]
  },
  {
    description: "Enter the current date",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: ";" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: ";" }
    ]
  },
  {
    description: "Copy the format and the contents to one cell below",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "D" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "D" }
    ]
  },
  {
    description: "Copy the format and the contents to one cell right",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "R" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "R" }
    ]
  },
  {
    description: "Enter the current entry to selected ranges",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Enter" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "return" }
    ]
  },
  {
    description: "Display [Replace] dialog box",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "H" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "H" }
    ]
  },
  {
    description: "Repeat the current Find action",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F4" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F4" }
    ]
  },
  {
    description: "Display [Sort] dialog box",
    category: "Shortcut keys for data entry",
    windows: [],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "R" }
    ]
  },
  {
    description: "Display [Create Tables] dialog box",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "T" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "T" }
    ]
  },
  {
    description: "Insert and edit a comment",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F2" }
    ],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F2" }
    ]
  },
  {
    description: "Display [Insert Hyperlink] dialog box",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "K" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "K" }
    ]
  },
  {
    description: "Display the auto complete list",
    category: "Shortcut keys for data entry",
    windows: [],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↓" }
    ]
  },
  {
    description: "Enter an array formula",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Enter" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "return" }
    ]
  },
  {
    description:
      "Perform a selected button function or check / uncheck the check box",
    category: "Shortcut keys for data entry",
    windows: [{ type: "symbol", val: "Space" }],
    mac: []
  },
  {
    description: "Use [Flash Fill] function",
    category: "Shortcut keys for data entry",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "E" }
    ],
    mac: []
  },
  {
    description: "Display [Charactor Viewer] dialog box (including Emoji)",
    category: "Shortcut keys for data entry",
    windows: [],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "space" }
    ]
  },
  {
    description: "Select the fill color",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "H" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "H" }
    ],
    mac: []
  },
  {
    description: "Add top borders to the selected range",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "H" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "B" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "P" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↑" }
    ]
  },
  {
    description: "Add bottom borders to the selected range",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "H" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "B" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "O" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "↓" }
    ]
  },
  {
    description: "Add left borders to the selected range",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "H" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "B" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "L" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "←" }
    ]
  },
  {
    description: "Add right borders to the selected range",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "H" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "B" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "R" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "" }
    ]
  },
  {
    description: "Add outline borders to the selected range",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "&" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "0" }
    ]
  },
  {
    description: "Remove outline borders from the selected range",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "_" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "–" }
    ]
  },
  {
    description: "Align left",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "H" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "L" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "1" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "L" }
    ]
  },
  {
    description: "Center text",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "H" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "A" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "C" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "E" }
    ]
  },
  {
    description: "Align right",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "H" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "A" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "R" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "R" }
    ]
  },
  {
    description: "Increase font size in text boxs",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: ">" }
    ],
    mac: []
  },
  {
    description: "Decrease font size in text boxs",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "<" }
    ],
    mac: []
  },
  {
    description: "Increase font size",
    category: "Shortcut keys for format cells",
    windows: [],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: ">" }
    ]
  },
  {
    description: "Decrease font size",
    category: "Shortcut keys for format cells",
    windows: [],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "<" }
    ]
  },
  {
    description: "Display [Format Cells] dialog box",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "1" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "1" }
    ]
  },
  {
    description: "Display [Font] tab in [Format Cells] dialog box",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "P" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "P" }
    ]
  },
  {
    description:
      "Display [Style] for Windows / [Modify Cell Style] for Mac dialog box",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "7" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "L" }
    ]
  },
  {
    description: "Display [Paste Special] dialog box",
    category: "Shortcut keys for format cells",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "V" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "V" }
    ]
  },
  {
    description: "Apply [General] number format",
    category: "Shortcut keys for number format",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "~" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "~" }
    ]
  },
  {
    description: "Apply [Time] fromat with hour, minute and AM or PM",
    category: "Shortcut keys for number format",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "@" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "@" }
    ]
  },
  {
    description: "Apply [Date] format with date, month and year",
    category: "Shortcut keys for number format",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "#" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "#" }
    ]
  },
  {
    description: "Apply [Percentage] format without decimal places",
    category: "Shortcut keys for number format",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "%" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "%" }
    ]
  },
  {
    description:
      "Apply [Currency] format with 2 decimal places and negative numbers in parentheses",
    category: "Shortcut keys for number format",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "$" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "$" }
    ]
  },
  {
    description:
      "Apply [Number] format with thousands separator, and minus sign (-) for negative values",
    category: "Shortcut keys for number format",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "!" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "!" }
    ]
  },
  {
    description: "Apply [Scientific] number format with two decimal place",
    category: "Shortcut keys for number format",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "^" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "^" }
    ]
  },
  {
    description: "Insert selected rows or columns",
    category: "Shortcut keys for rows and columns",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "+" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "+" }
    ]
  },
  {
    description: "Delete selected rows or columns",
    category: "Shortcut keys for rows and columns",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "–" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "–" }
    ]
  },
  {
    description: "Hide the selected rows",
    category: "Shortcut keys for rows and columns",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "9" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "9" }
    ]
  },
  {
    description: "Hide the selected columns",
    category: "Shortcut keys for rows and columns",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "0" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "0" }
    ]
  },
  {
    description: "Unhide the selected rows",
    category: "Shortcut keys for rows and columns",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "(" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "9" }
    ]
  },
  {
    description: "Unhide the selected columns",
    category: "Shortcut keys for rows and columns",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: ")" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "0" }
    ]
  },
  {
    description: "Delete the characters from the cursor to the last",
    category: "Shortcut keys for rows and columns",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Delete" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "fn" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "delete" }
    ]
  },
  {
    description: "Group the selected cells",
    category: "Shortcut keys for rows and columns",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "K" }
    ]
  },
  {
    description: "Ungroup the selected cells",
    category: "Shortcut keys for rows and columns",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "←" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "J" }
    ]
  },
  {
    description: "Display [Formula] tab in ribbon",
    category: "Shortcut keys for formulas and functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "→" },
      { type: "symbol", val: "M" }
    ],
    mac: []
  },
  {
    description: "Show or hide the formula bar",
    category: "Shortcut keys for formulas and functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "U" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "U" }
    ]
  },
  {
    description: "Start a formula",
    category: "Shortcut keys for formulas and functions",
    windows: [{ type: "symbol", val: "=" }],
    mac: [{ type: "symbol", val: "=" }]
  },
  {
    description: "Display [Insert Function] dialog box",
    category: "Shortcut keys for formulas and functions",
    windows: [
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F3" }
    ],
    mac: []
  },
  {
    description: "Display [Insert Function Arguments] dialog box",
    category: "Shortcut keys for formulas and functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "A" }
    ],
    mac: []
  },
  {
    description: "Display [Formula Builder]",
    category: "Shortcut keys for formulas and functions",
    windows: [],
    mac: [
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F3" }
    ]
  },
  {
    description:
      "Display [Formula Builder] when a valid function name is typed in a formula",
    category: "Shortcut keys for formulas and functions",
    windows: [],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "A" }
    ]
  },
  {
    description: "Insert Autosum",
    category: "Shortcut keys for formulas and functions",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "=" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "T" }
    ]
  },
  {
    description:
      "Insert function arguments and parentheses when function name has been entered",
    category: "Shortcut keys for formulas and functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "A" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "A" }
    ]
  },
  {
    description: "Switch display between a cell value and a fomula",
    category: "Shortcut keys for formulas and functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "`" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "`" }
    ]
  },
  {
    description:
      "Switch display between a cell value and a formula in the worksheet",
    category: "Shortcut keys for formulas and functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "`" }
    ],
    mac: []
  },
  {
    description: "Copy formula from the cell above to the active cell",
    category: "Shortcut keys for formulas and functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "‘" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "‘" }
    ]
  },
  {
    description: "Copy value from the cell above to the active cell",
    category: "Shortcut keys for formulas and functions",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "Shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "“" }
    ],
    mac: [
      { type: "symbol", val: "control" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "shift" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "“" }
    ]
  },
  {
    description:
      "Switch cell references from relative to partially absolute to absolute",
    category: "Shortcut keys for formulas and functions",
    windows: [{ type: "symbol", val: "F4" }],
    mac: [{ type: "symbol", val: "F4" }]
  },
  {
    description: "Create an enbedded chart from the selected range",
    category: "Shortcut keys for charts",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F1" }
    ],
    mac: [
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F1" }
    ]
  },
  {
    description: "Create a chart in a new worksheet from the selected range",
    category: "Shortcut keys for charts",
    windows: [{ type: "symbol", val: "F11" }],
    mac: [{ type: "symbol", val: "F11" }]
  },
  {
    description: "Create a macro sheet",
    category: "Shortcut keys for macros",
    windows: [
      { type: "symbol", val: "Ctrl" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F11" }
    ],
    mac: [
      { type: "symbol", val: "⌘" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F11" }
    ]
  },
  {
    description: "Display [Macro] dialog box",
    category: "Shortcut keys for macros",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F8" }
    ],
    mac: [
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F8" }
    ]
  },
  {
    description: "Display [Microsoft Visual Basic] window",
    category: "Shortcut keys for macros",
    windows: [
      { type: "symbol", val: "Alt" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F11" }
    ],
    mac: [
      { type: "symbol", val: "option" },
      { type: "operator", val: "+" },
      { type: "symbol", val: "F11" }
    ]
  }
];
