---
title: SaveScreenshot
parent: API
---

# API documentation

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


