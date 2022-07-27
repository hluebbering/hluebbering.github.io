+++
# A Projects section created with the Portfolio widget.
widget = "portfolio"
headless = true 
active = true
weight = 65

title = "Projects"
# subtitle =

[content]
  # Page type to display. E.g. project.
  page_type = "project"
  
  # Filter toolbar (optional).
  # Add or remove as many filters (`[[content.filter_button]]` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.

  # Default filter index (e.g. 0 corresponds to the first `[[filter_button]]` instance below).
  filter_default = 0
  
  [[content.filter_button]]
    name = "All"
    tag = "*"
  
  [[content.filter_button]]
    name = "Data Science"
    tag = "Data Science"
  
  [[content.filter_button]]
    name = "Mathematics"
    tag = "Mathematics"
    
  [[content.filter_button]]
    name = "Machine Learning"
    tag = "Machine Learning"
  
  [[content.filter_button]]
    name = "Python"
    tag = "Python"
    
  [[content.filter_button]]
    name = "R"
    tag = "R"
  
  [[content.filter_button]]
    name = "Other"
    tag = "Other"
  
  

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "2"

  # Toggle between the various page layout types.
  #   1 = List
  #   3 = Card
  #   5 = Showcase
  view = 3

  # For Showcase view, flip alternate rows?
  flip_alt_rows = false

[design.background]
  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "DeepSkyBlue"
  # gradient_end = "SkyBlue"
  
  # Background image.
  # image = "background.jpg"  # Name of image in `static/img/`.
  # image_darken = 0.6

  # text_color_light = true  
  
[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
+++

