
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
