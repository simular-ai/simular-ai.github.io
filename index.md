---
title: SimuLang API
layout: simulang
nav_order: 1
description: "API documentation for Simulang."
permalink: /
---

# SaveScreenshot(element:fileName:directory)


Takes a screenshot of an element on the screen or the whole screen, and saves the screenshot as a PNG to a file.


```swift
func SaveScreenshot(
        element: UIElement? = nil,
        fileName: String? = nil,
        directory: String? = nil
    )  
```

## Parameters

### element
If provided, limit the screenshot to the frame of the element. Default is the whole screen.

### fileName
Name for the image name, default is “simularSavedImage.png”.

### directory
Directory to save the image, default at desktop.


## Return Value

None


## Discussion

Examples:

- Instruction: Save screenshot of whole screen to screenshot.png
```swift
SaveScreenshot(fileName: "screenshot.png")
```
- Instruction: Screenshot the group element and save to clipboard
```swift
SaveScreenshot(element: group)
```
- Instruction: Screenshot the table element and save to /User/path/to/screenshot/
```swift
SaveScreenshot(element: table, directory: "/User/path/to/screenshot/")
```



# ScreenshotToClipboard(element)


Take a screenshot of an element or the current page and save it to the system clipboard


```swift
func ScreenshotToClipboard(element: UIElement? = nil)  
```

## Parameters

###  element
If provided, limit the screenshot to the frame of the element. Default is the whole screen.


## Return Value

None


## Discussion

Examples:

- Instruction: take screenshot and save to clipboard
```swift
ScreenshotToClipboard()
```
- Instruction: get the table element on the page, save a screenshot of it to clipboard
```swift
var elements = GetElements(elementRoles: ["table"])
ScreenshotToClipboard(element: elements[0])
```



# Open(app:url:waitForLoadComplete:waitTime)


Open or switch to an application.


```swift
func Open(app: String? = nil,
                   url: String? = nil,
                   waitForLoadComplete: Bool = true,
                   waitTime: Int = 0)  
```

## Parameters

### app
application name, e.g., Google Chrome, iMessage.

### url
url address of a web page, e.g., google.com

### waitForLoadComplete
Whether or not to wait for a page to complete loading after typing.

### waitTime
Duration in seconds to wait after typing.


## Return Value

None


## Discussion

Examples:

- Instruction: open chrome
```swift
Open(app: "Google Chrome")
```
- Instruction: go to Zoom app
```swift
Open(app: "Zoom")
```
- Instruction: switch to Slack
```swift
Open(app: "Slack")
```
- Instruction: go to simular.ai
```swift
Open(url: "https://simular.ai")
```



# `Type`(text:withReturn:waitTime:waitForLoadComplete)


Type using the keyboard.


```swift
func `Type`(
        text: String,
        withReturn: Bool = false,
        waitTime: Int = 0,
        waitForLoadComplete: Bool = false
    )  
```

## Parameters

### text
A piece of text to type.

### withReturn
Whether or not to press the return (enter) key after typing.

### waitTime
Duration in seconds to wait after typing.

### waitForLoadComplete
Whether or not to wait for a page to complete loading after typing.


## Return Value

None


## Discussion

Examples:

- Instruction: Enter John Smith with return
```swift
Type(text: "John Smith", withReturn: true)
```
- Instruction: Input John Smith
```swift
Type(text: "John Smith", withReturn: false)
```
- Instruction: Type John Smith
```swift
Type(text: "John Smith", withReturn: false)
```
- Instruction: Fill in John Smith
```swift
Type(text: "John Smith", withReturn: false)
```
- Instruction: type https://google.com and press enter
```swift
Type(text: "https://google.com", withReturn: true)
```



# Shortcut(key:cmd:ctrl:option:shift:waitTime)


Perform keyboard shortcut in the current application.


```swift
func Shortcut(key: String,
                  cmd: Bool,
                  ctrl: Bool,
                  option: Bool,
                  shift: Bool,
                  waitTime: Int)  
```

## Parameters

### key
A key  to be pressed

### cmd
Whether the command modifier should be pressed when tapping the key.

### ctrl
Whether the control modifier should be pressed when tapping the key.

### option
Whether the option modifier should be pressed when tapping the key.

### shift
Whether the shift modifier should be pressed when tapping the key.

### waitTime
Time in second to wait after executing the action.


## Return Value

None


## Discussion

Examples:

- Instruction: press ctrl+a
```swift
Shortcut(key: "a", ctrl: true)
```
- Instruction: use shortcut to select all
```swift
Shortcut(key: "a", cmd: true)
```
- Instruction: press cmd+shift+t
```swift
Shortcut(key: "t", cmd: true, shift: true)
```
- Instruction: press option and down arrow
```swift
Shortcut(key: "downArrow", option: true)
```
- Instruction: press enter
```swift
Shortcut(key: "enter")
```



# Click(at:element:clickType:withCommand:spatialRelation:anchorConcept:prior:position:includeInvisible:waitForLoadComplete:waitTime)


Click on something, either specified by the `at` argument or the `element` argument.
Disambiguate by specifing the spatial relation between the target element and an anchor concept.


```swift
func Click(
        at: String = "",
        element: UIElement? = nil,
        clickType: String = "left",
        withCommand: Bool = false,
        spatialRelation: String = "",
        anchorConcept: String = "",
        prior: String = "none",
        position: String = "center",
        includeInvisible: Bool = false,
        waitForLoadComplete: Bool = false,
        waitTime: Int = 0
    )  
```

## Parameters

### at
Description of a target object to click. For higher accuracy, describe the target object by its role and value, e.g.
"sign in button", "first name textfield".

### element
A UIElement. If given, ignores the `at` argument and directly clicks on this element.

### clickType
Type of click. Options are: “left" (default), “right”, and “doubleClick” (two quick left clicks)

### withCommand
If true, agent presses the command key during click.

### spatialRelation
A comma-separated String of spatial relationship between the target object and element(s) that best
match the `anchorConcept`. Options are: "closest", "furthest", "above", "right", "below", "left", "contains", "containedIn"

### anchorConcept
Description of an object used as an anchor with `spatialRelation`.

### prior
A optional global spatial location prior used for disambiguation among elements that have similar descriptions.
Options are: "left", "right", "top", "bottom". For example, "left" means to choose the left-most element among candidates.

### position
Position within the frame of an element to click. Options are: topleft, topcenter, topright, middleleft, center,
middleright, bottomleft, bottomcenter, bottomright, anywhere

### includeInvisible
Whether or not to find the target from sections of the page that are not currently visible (i.e., needs scrolling).

### waitForLoadComplete
If true, waits for page to finish loading after the click.

### waitTime
Integer number of seconds to wait after click.


## Return Value

None


## Discussion

Examples:

- Instruction: click new tab
```swift
Click(at: "new tab")
```
- Instruction: cmd+click verify insurance button
```swift
Click(at: "verify insurance button", withCommand: true)
```
- Instruction: double click Styles.zip
```swift
Click(at: "Styles.zip", clickType: "doubleClick")
```
- Instruction: click slider closest to pointer size
```swift
Click(at: "slider", spatialRelation: "closest", anchorConcept: "pointer size")
```



# Move(to:element:spatialRelation:anchorConcept:prior:includeInvisible:waitForLoadComplete:waitTime)


Moves the cursor to an object. Disambiguate by specifing the spatial relation between the target element and an anchor concept.
All parameters besides `to` have the same definition as those in the `Click` action.


```swift
func Move(
        to: String = "",
        element: UIElement? = nil,
        spatialRelation: String = "",
        anchorConcept: String = "",
        prior: String = "none",
        includeInvisible: Bool = false,
        waitForLoadComplete: Bool = false,
        waitTime: Int = 0
    )  
```

## Parameters

### to
Description of a target object to click. For higher accuracy, describe the target object by its role and value, e.g.
"sign in button", "first name textfield".

### element
See definition in `Click`.

### spatialRelation
See definition in `Click`.

### anchorConcept
See definition in `Click`

### prior
See definition in `Click`

### includeInvisible
See definition in `Click`

### waitForLoadComplete
See definition in `Click`

### waitTime
See definition in `Click`


## Return Value

None


## Discussion

Examples:

- Instruction: Move to textarea below verify insurance
```swift
Move(to: "textarea", spatialRelation: "below", anchorConcept: "verify insurance")
```



# GetElements(elementRoles:elementOverallDescription:threshold:root:spatialRelation:anchorRole:anchorOverallDescription:anchorElements:horizontalRank:verticalRank:sortBy:returnType)


Get elements that satisfy some conditions inside the current frontmost application or inside a root element (if given).
For disambiguation, one can constrain the search to elements that satisfy certain spatial relations to anchor elements.
This function supports multiple return types according to `returnType`.


```swift
func GetElements(
        elementRoles: [String] = [],
        elementOverallDescription: String = "",
        threshold: Double = 0.75,
        root: UIElement? = nil,
        spatialRelation: String = "",
        anchorRole: String = "",
        anchorOverallDescription: String = "",
        anchorElements: [UIElement] = [],
        horizontalRank: Int? = nil,
        verticalRank: Int? = nil,
        sortBy: String = "",
        returnType: String = "elementArray"
    ) -> Any? 
```

## Parameters

### elementRoles
Constrains the search to elements whose role is included in this array of roles.
Required if elementOverallDescription is not given.

### elementOverallDescription
Description of elements to get from the page. Required if elementRoles are not provided.

### threshold
If `elementOverallDescription` is given, then accept candidate elements whose normalized string
distance to `elementOverallDescription` is below this threshold value.

### root
If given, then the search is limited to elements contained within this root element.

### spatialRelation
A comma-separated String of spatial relationships between the target elements and the anchor.
Available options are: "closest", "furthest", "above", "right", "below", "left", "contains", "containedIn", "sameRow", "sameColumn"

### anchorRole
Role of element(s) used as anchor for spatial relation.

### anchorOverallDescription
Description of an object used as an anchor with spatialRelation.

### anchorElements
Elements to use as anchor for spatial relation constraints.
If `anchorElements` is provided, then anchorRole and anchorOverallDescription are ignored.

### horizontalRank
If given, sorts the elements by x-coordinate of frame midpoint and returns the element with this rank.
Left-most element has rank 1.

### verticalRank
If given, sorts the elements by y-coordinate of frame midpoint and returns the element with this rank.
Top-most element has rank 1.

### sortBy
Returns the found elements in sorted order, by "x" (left to right) or "y" (top to bottom).
Used only if `returnType` is "elementArray".

### returnType
Options are: "elementArray" (default), "string", "stringArray", "strToElemDict".
- elementArray: returns an array of UIElements
- string: returns a semicolon-separated string of descriptions of found elements
- stringArray: returns an array of String descriptions of found elements
- strToElemDict: returns a [String: Element] dictionary with element description as keys and corresponding element as value


## Return Value

Depending on returnType: [UIElement] | String | [String] | [String: UIElement]


## Discussion

Examples:

- Instruction: get all links from the page
```swift
var allLinks = GetElements(elementRoles: ["link"])
```
- Instruction: Get all comboBox elements to the right of text "state selection
```swift
var comboBoxes = GetElements(elementRoles: ["comboBox"], spatialRelation: "right", anchorRole: "staticText", anchorOverallDescription: "state selection")
```
- Instruction: Get all cells in the table and return as dictionary
```swift
var cellDict = GetElements(elementRoles: ["cell"], spatialRelation: "containedIn", anchorRole: "table", returnType: "strToElemDict")
```



# Respond(message:requireConfirm)


Respond to the user with a message and optionally ask for user confirmation to proceed.


```swift
func Respond(message: String, requireConfirm: Bool = false)  
```

## Parameters

### message
A message to show to the user.

### requireConfirm
Whether or not user confirmation is required to proceed with the remaining actions.


## Return Value

None


## Discussion

Examples:

- Instruction: Ask the user for confirmation
```swift
Respond(message: "Could you confirm?", requireConfirm: true)
```
- Instruction: Output llmResult to the user
```swift
Respond(message: llmResult)
```



# LLM(input:model)


Runs a Large Language Model on the given input String.


```swift
func LLM(input: String, model: String? = nil) -> String 
```

## Parameters

### input
Input to LLM

### model
Optional LLM model specification. Inquire for more details.


## Return Value

String


## Discussion

Examples:

- Instruction: run LLM on the prompt
```swift
var llmOutput = LLM(input: prompt)
```
- Instruction: get content of page and use LLM to summarize it into 50 words
```swift
var content = GetContent()
var summary = LLM(input: "Summarize the following into 50 words: \(content)")
```



# ConceptsExist(concepts)


Checks if all the concepts can be found on the current visible screen.


```swift
func ConceptsExist(concepts: [String]) -> Bool 
```

## Parameters

###  concepts
An array of target concepts to find.


## Return Value

If all concepts can be found, returns true, otherwise false.


## Discussion

Examples:

- Instruction: if there is a play button, click it
```swift
if ConceptsExists(concepts: ["play button"]) {
    Click(at: "play button")
}
```
- Instruction: if the page has a sign in button and a log in button, ask user to log in
```swift
if ConceptsExist(concepts: ["sign in button", "log in button"]) {
    Respond(message: "Could you log in?", requireConfirm: true)
}
```



# WaitForConcepts(concepts)

Waits until all concepts can be found in the current frontmost window. If not all concepts can be found within 10 seconds, then
returns failure.


```swift
func WaitForConcepts(concepts: [String])  
```

## Parameters

### concepts
An array of target concepts to find.


## Return Value

None


## Discussion

Examples:

- Instruction: Wait for the log in button and sign up button to show up
```swift
WaitForConcepts(concepts: ["log in button", "sign up button"])
```



# GetContent(inConcept:inElement:format)


Get text content from the current frontmost window or a region corresponding to the provided concept or element.


```swift
func GetContent(
        inConcept: String = "",
        inElement: UIElement? = nil,
        format: String = "flat"
    ) -> Any? 
```

## Parameters

### inConcept
Gets content from the subtree rooted at elements that match this concept.

### inElement
Get content from the subtree rooted at this element.

### format
Format of the returned content. Options are: "flat", "json", "xml"


## Return Value

If `inElement` argument is given or the frontmost window was used (because neither `inConcept` nor

`inElement` was given), then returns a single String. Otherwise, returns a [String] array with one String per root element.

## Discussion

Examples:

- Instruction: get content from page in json format
```swift
var pageContent = GetContent(format: "json")
```
- Instruction: get content from the table element
```swift
var tableContent = GetContent(inElement: table)
```
- Instruction: get content inside group job post details
```swift
var groupContent = GetContent(inConcept: "group job post details")
```



# SummarizePage(prompt)


Summarizes the current page using an LLM and respond to the user.


```swift
func SummarizePage(prompt: String? = nil) -> String? 
```

## Parameters

###  prompt
An optional prompt for an LLM.


## Return Value

String


## Discussion

Examples:

- Instruction: summarize the flight options on this page
```swift
var summary = SummarizePage(prompt: "summarize the flight options")
```



# GetGoogleSheetColumns(headers)


Gets the column ids of each header in a given array of column headers in a Google Sheet.
For example, if the sheet has column headers "website", "description", "date" in cells A1, B1, C1, respectively, then `GetGoogleSheetColumns(headers: ["website", "description", "date"])` returns ["A", "B", "C"]
Note: This function currently assumes that the table headers are on row 1.


```swift
func GetGoogleSheetColumns(headers: [String]) -> [String]? 
```

## Parameters

###  headers
Array of column header


## Return Value

Array of column id, each is a capital letter from A to Z


## Discussion

Examples:

- Instruction: get the columns for the headers "description" and "website"
```swift
var columns = GetGoogleSheetColumns(headers: ["description", "website"])
```



# GetGoogleSheetCellValue(cell)


Gets the value of a cell in a Google Sheet.


```swift
func GetGoogleSheetCellValue(cell: String) -> String? 
```

## Parameters

###  cell
Label of a cell. Column is indicated by a capital letter and row is indicated by a number.
For example "B42" is the cell at column B row 42.


## Return Value

Value of the cell


## Discussion

Examples:

- Instruction: get the description of cell B42.
```swift
var cellValue = GetGoogleSheetCellValue(cell: "B42")
```



# SetGoogleSheetCellValue(cell:value)


Sets the value of a Google Sheet cell.


```swift
func SetGoogleSheetCellValue(cell: String, value: String)  
```

## Parameters

### cell
Label of a cell. Column is indicated by a capital letter and row is indicated by a number. For example "B42"
is the cell at column B row 42.

### value
value to write to the cell


## Return Value

None


## Discussion

Examples:

- Instruction: write "Simular" into cell B42
```swift
SetGoogleSheetCellValue(cell: "B42", value: "Simular")
```



# CopyToClipboard(text)

Copies a String to clipboard.


```swift
func CopyToClipboard(text: String)  
```

## Parameters

###  text
Text to be copied to the clipboard.


## Return Value

None


## Discussion

Examples:

- Instruction: copy cell to the clipboard
```swift
CopyToClipboard(text: cell)
```



# GetAttributesOfElements(elements:attributes:separator:attributeNameThreshold)


Given an array of elements, and an array of requested attributes, returns the attributes of all the elements.


```swift
func GetAttributesOfElements(
        elements: [UIElement],
        attributes: [String],
        separator: String = " ",
        attributeNameThreshold: Double = 0.2
    ) -> [String] 
```

## Parameters

### elements
An Array of UIElements.

### attributes
A [String] array of attributes. Valid options are: "role", "description", "title", "value".
For example, use "value" to get the value of text elements.

### separator
For an element, its attribute values are concatenated using this separator between values.

### attributeNameThreshold
A threshold in [0,1]. If a query attribute name does not exactly match valid
attribute names, then the attribute whose normalized Levenshtein distance to the query is the smallest and is lower
than thos threshold will be used.


## Return Value

A [String] array with length equal to the number of elements. The i-th entry is the concatenated attribute values

    for the i-th element.

## Discussion

Examples:

- Instruction: Get value from elements with role textArea and description text entry area source editor
```Swift
var elements = GetElements(elementRoles: ["textArea"], elemOverallDescription: "text entry area source editor")
var value = GetAttributesOfElements(elements: elements, attributes: ["value"])
```
- Instruction: Get description and title from the text entry area source editor
```swift
var sourceEditor = GetElements(elemOverallDescription: "text entry area source editor")
var desc = GetAttributesOfElements(elements: sourceEditor, attributes: ["description", "title"])
```



# GetCells(row:column)


Get all cells from a row or column element. Either row or column must be given.


```swift
func GetCells(row: UIElement? = nil, column: UIElement? = nil) -> [UIElement]? 
```

## Parameters

### row
A row element that contains one or more cells.

### column
A column element that contains one or more cells.


## Return Value

An array of cell elements contained in the given row or column. If input is a row, the output array is sorted by

    increasing x-coordinate (left to right). If input is a column, the output array is sorted by increasing y-coordinate (top to bottom).

## Discussion

Examples:

- Instruction: get all cells in the first row
```swift
var rows = GetElements(elementRoles: ["row"], sortBy: "y")
var cells = GetCells(row: rows[0])
```



# GetCellValue(cell)


Get the value of a given cell element.


```swift
func GetCellValue(cell: UIElement) -> String 
```

## Parameters

###  cell
A cell element.


## Return Value

Value contained in the cell.


## Discussion

Examples:

- Get the value of the cell
```swift
var cellValue = GetCellValue(cell: cell)
```



# GetDictFromJson(jsonStr)


Gets a dictionary from the given JSON-formatted input.


```swift
func GetDictFromJson(jsonStr: String) -> [String: String]? 
```

## Parameters

###  jsonStr
A JSON-formatted String.


## Return Value

A dictionary representation of the input.


## Discussion

Examples:

- Instruction: get content from whole page, use LLM to convert it to JSON format enclosed in triple backticks, and get a dictionary from the JSON.
```swift
var wholePageContent = GetContent()
var llmInput = "Convert the following content to JSON format enclosed in triple backticks: \(wholePageContent)"
var llmOutput = LLM(input: llmInput)
var dict = GetDictFromJson(jsonStr: llmOutput)
```



# GetFromClipboard()


Get the content of the current clipboard.


```swift
func GetFromClipboard() -> String 
```

## Parameters



## Return Value

Content of the currrent clipboard


## Discussion

Examples:

- Instruction: get the clipboard content
```swift
var clipboardContent = GetFromClipboard()
```



# GetStructuredDescription(fromElements)


Gets XML-formatted description of the contents in each element.


```swift
func GetStructuredDescription(fromElements: [UIElement]) -> [String] 
```

## Parameters

###  fromElements
An array of UIElements `[u_1, ..., u_n]`.


## Return Value

An array of String `[s_1, ..., s_n]`, where each `s_i` is an XML-formatted description of the contents

    rooted at `u_i`.

## Discussion

Examples:

- Instruction: get the elements with role "group" and description "group under plan progress", then get description of the elements in XML format
```swift
var elements = GetElements(elementRoles: ["group"], elemOverallDescription: "group under plan progress")
var description = GetStructuredDescription(fromElements: elements)
```



# SetValue(text:withReturn:waitTime:waitForLoadComplete)


Set the value of a text field or text area without using keyboard.


```swift
func SetValue(
        text: String,
        withReturn: Bool = false,
        waitTime: Int = 0,
        waitForLoadComplete: Bool = false
    )  
```

## Parameters

### text
A piece of text to type.

### withReturn
Whether or not to press the return (enter) key after typing.

### waitTime
Duration in seconds to wait after typing.

### waitForLoadComplete
Whether or not to wait for a page to complete loading after typing.


## Return Value

None


## Discussion

Examples:

- Instruction: set value to John Smith with return
```swift
SetValue(text: "John Smith", withReturn: true)
```
- Instruction: set text field value to John Smith
```swift
SetValue(text: "John Smith", withReturn: false)
```



# SoftDictLookup(dict:query)


Access the given dictionary using the query.
Counts as a match if the dictionary key contains the query, all lowercased.


```swift
func SoftDictLookup(dict: [String: Any], query: String) -> Any? 
```

## Parameters

### dict
A dictionary to access.

### query
A query used to search the dictionary.


## Return Value

Dictionary value corresponding to the key that contains the query.


## Discussion

Examples:

- Instruction: Get all text fields inside the webpage. If any text field description matches "first name", click it
```swift
var elemDict = GetElements(elementRoles: ["textField"], spatialRelation: "containedIn", anchorRole: "webArea", returnType: "strToElemDict")
if var elem = SoftDictLookup(dict: elemDict, query: "first name") {
    Click(elem: elem)
}
```



# Wait(unit:waitTime)


Put Agent into sleep state for a certain amount of time.


```swift
func Wait(unit: String, waitTime: Int)  
```

## Parameters

### unit
Units of waitTime, default is s for seconds. Options are s and ms.

### waitTime
Duration of time to wait in the given units.


## Return Value

None


## Discussion

Examples:

- Instruction: Wait for 3s
```swift
Wait(waitTime: 3, unit: "s")
```
- Instruction: Wait for 0.5s
```swift
Wait(waitTime: 500, unit: "ms")
```
- Instruction: Wait for 6 seconds
```swift
Wait(waitTime: 6)
```



# GetCellIndices(cellValues)


Given an array of table cell values, return a corresponding array of cell indices.
For example, suppose the table has value1 in cell A10, then `GetCellIndices(cellValues: ["value1"])` returns ["A10"]


```swift
func GetCellIndices(cellValues: [String])  
```

## Parameters

###  cellValues
values of the cell


## Return Value

[String] array of cell indices]


## Discussion

Examples:

- Instruction: Get the indices of the cells containing value1 and value2
```swift
var cellIndices = GetCellIndices(cellValues: ["value1", "value2"])
```



# GetCellLabel(cell)


Get the label of the given cell element in Excel.


```swift
func GetCellLabel(cell: UIElement) -> String 
```

## Parameters

###  cell
A cell element


## Return Value

cell's label String. Example: "A1"


## Discussion

Examples:

- Instruction: Get the label of the cell
```swift
var label = GetCellLabel(cell: cell)
```



# GetTableColumn(header:index)


Given a header or  a index String, return the column under it as [index: Element] dictionary
If the table has a column with header "Website" in cell A1, and elements elem1 and elem2 under it, then this
function returns ["A2": elem1, "A3": elem2].


```swift
func GetTableColumn(header: String? = nil, index: String? = nil)  
```

## Parameters

### header
value of column header.

### index
index of column header, e.g. "B42".


## Return Value

Dictionary of [String: UIElement] pair for all information in the column under header


## Discussion

Examples:

- Instruction: Get the columns under Website
```swift
var websiteColumn = GetTableColumn(header: "Website")
```
- Instruction: Get the columns under index A1
```swift
var A1Column = GetTableColumn(index: "A1")
```

