---
title: Simular Browser
layout: home
nav_order: 1
description: "Simular Browser Python API documentation."
permalink: /simularBrowser
---

# Simular Browser Python API documentation

# Setup and configuration

## __init__()
```python
def __init__(self,
                 path: str,
                 anthropic_key: str = '',
                 planner_model: str = 'claude-3-5-sonnet',
                 planner_mode: str = 'system_1_2'):
```

## Parameters

### path
Absolute path to the Simular Browser executable.

### anthropic_key
Anthropic API key.

### planner_model
Model for the planner.
Selection: "claude-3-5-sonnet"

### planner_mode
Mode to use for the planner.
```
"system_1": runs a planner that produces one-shot instructions
"system_2": runs a planner that operates step-by-step exploration
"system_1_2": runs system 1, then system 2 if system 1 fails
"agent_s1": runs Agent S1: hierarchical planning with exploration
```


## Return Value
None

## Discussion
Examples:

- Instruction: Initialize Simular Browser for default configuration
```python
simular = SimularBrowser(path="path/to/simular")
```
- Instruction: Initialize Simular Browser with custom configuration
```python
simular = SimularBrowser(path="path/to/simular", anthropic_key="anthropic_key", planner_model="claude-3-5-sonnet", planner_mode="system_1_2")
```

# Simular Browser API

## is_app_running()
```python
def is_app_running(self) -> bool:
```

## Parameter
None

## Return Value
True if the app is running, False otherwise.

## Discussion
Examples:

- Instruction: Check if Simular Browser is running
```python
simular = SimularBrowser(path="path/to/simular")
is_running = simular.is_app_running() # True if running, False otherwise
```


## launch_app()
```python
def launch_app(self) -> None:
```

## Parameter
None

## Return Value
None

## Discussion
Examples:

- Instruction: Launch Simular Browser
```python
simular = SimularBrowser(path="path/to/simular")
simular.launch_app()
```

## run()
```python
def run(self, query, timeout=None, reset: bool = False) -> dict:
```

## Parameters

### query
Query to run in Simular Browser.

### timeout
Timeout for this query.

### reset
Reset the app before running the query.

## Return Value
Dictionary containing the response from Simular Browser:

```python
output = {
    "responses": self.responses,
    "images": self.images,
    "info": self.info
}

- responses: List of text responses from Simular Browser.
- images: List of image responses from Simular Browser.
- info: Information about this run from Simular Browser.

```

## Discussion

Examples:

- Instruction: Run a query in Simular Browser
```python
simular = SimularBrowser(path="path/to/simular")
output = simular.run("What is the capital of France?")
```

- Instruction: Run a query in Simular Browser with a timeout
```python
simular = SimularBrowser(path="path/to/simular")
output = simular.run("What is the capital of France?", timeout=60)
```

##TODO:
- Multi-tab parallel execution
