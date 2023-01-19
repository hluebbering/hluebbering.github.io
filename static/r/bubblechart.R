# libraries
library(packcircles)
library(ggplot2)
library(viridis)

# Create data
data <- data.frame(group=c("Mathematical \nModeling", 
                           "Machine \nLearning",
                           "Statistical \nAnalysis",
                           "Data Analytics \n& Visualizations", 
                           "Nano-\ntechnology", 
                           "AI", 
                           "Web Design"), 
                   value=c(75, 25, 40, 60, 10, 15, 20)) 

# Generate the layout
packing <- circleProgressiveLayout(data$value, sizetype='area')
packing$radius <- 0.95*packing$radius
data <- cbind(data, packing)
dat.gg <- circleLayoutVertices(packing, npoints=50)

# Plot 
bubbleplot <- ggplot2::ggplot() + 
  ggplot2::geom_polygon(data = dat.gg, 
                        aes(x, y, group = id, fill=id), 
                        colour = "#a09a9c", alpha = 0.95,
                        size=.5) +
  #scale_fill_viridis() +
  scale_fill_gradientn(colours = c("#0f1621", "#171d33", "#222632", "#0f1621",
                                    "#171d33", "#222632")) +
  ggplot2::geom_text(data = data, color="#a09a9c",
                     aes(x, y, label = paste0(group), size = value)) +
  scale_size_continuous(range = c(4,6)) + 
  ggplot2::theme_void() + 
  ggplot2::theme(legend.position="none",
                 text =  element_text(family = "Roboto Condensed",
                                      face = "bold", color="white"))+ 
  ggplot2::coord_equal()



  
  

ggplot2::ggsave(filename = 'static/r/bubble.png', plot = bubbleplot,
                scale = 1.1,dpi = 900,width = 6,height = 7)

# 
# library(htmltools)
# library(plotly)
# l <- plotly::ggplotly(bubbleplot)
# 
# htmlwidgets::saveWidget(l, "static/r/bubble.html")







