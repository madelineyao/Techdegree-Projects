#include "customColorPicker.h"
#include "cs221util/HSLAPixel.h"

customColorPicker::customColorPicker(HSLAPixel fillColor,int r, int center_x, int center_y, PNG im){
     img =im; 
     radius = r; 
     color = fillColor; 
     x = center_x; 
     y = center_y; 
     


}
      


HSLAPixel customColorPicker::operator()(int x, int y)
{
   
}
