# CSS Learning Notes
![CSS Notes](https://drive.google.com/file/d/1uqknlijZ9zT5pNRW7Oyw-Gl2dyS2MUX0/view?usp=sharing)

## 1. What is CSS?
- CSS (Cascading Style Sheets) is a styling language used to describe the presentation of HTML documents
- It controls the layout, formatting, and appearance of web pages

## 2. Types of CSS Inclusion
1. **Inline CSS**
   - Added directly to HTML elements using the style attribute
   - Example: `<p style="color: blue;">`

2. **Internal/Embedded CSS**
   - Added in the `<style>` tag in the HTML `<head>` section
   ```html
   <style>
     p { color: blue; }
   </style>
   ```

3. **External CSS**
   - Separate .css file linked to HTML using `<link>` tag
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

## 3. CSS Selectors
- **Element Selector**: `p { }`, `div { }`
- **Class Selector**: `.classname { }`
- **ID Selector**: `#idname { }`
- **Universal Selector**: `* { }`
- **Attribute Selector**: `[type="text"] { }`
- **Combinators**: 
  - Descendant: `div p`
  - Child: `div > p`
  - Adjacent Sibling: `div + p`
  - General Sibling: `div ~ p`

## 4. CSS Colors
- **Color Names**: `red`, `blue`, `green`
- **HEX Values**: `#FF0000`, `#0000FF`
- **RGB**: `rgb(255, 0, 0)`
- **RGBA**: `rgba(255, 0, 0, 0.5)`
- **HSL**: `hsl(0, 100%, 50%)`
- **HSLA**: `hsla(0, 100%, 50%, 0.5)`

## 5. Background Properties
- `background-color`
- `background-image`
- `background-repeat`
- `background-position`
- `background-size`
- `background-attachment`
- Shorthand: `background`

## 6. Borders
- `border-width`
- `border-style`
- `border-color`
- Shorthand: `border: 1px solid black`
- `border-radius` for rounded corners

## 7. Margin & Padding
### Margin
- Space outside elements
- `margin-top`, `margin-right`, `margin-bottom`, `margin-left`
- Shorthand: `margin: 10px 20px 10px 20px`

### Padding
- Space inside elements
- `padding-top`, `padding-right`, `padding-bottom`, `padding-left`
- Shorthand: `padding: 10px 20px 10px 20px`

## 8. Box Model
1. **Content**: The actual content of the element
2. **Padding**: Space between content and border
3. **Border**: The border around the padding
4. **Margin**: Space outside the border
- `box-sizing: border-box` includes padding and border in element's total width/height

## 9. Text Properties
- `font-family`
- `font-size`
- `font-weight`
- `text-align`
- `text-decoration`
- `line-height`
- `letter-spacing`
- `word-spacing`

## 10. Display Property
- `block`
- `inline`
- `inline-block`
- `none`
- `flex`
- `grid`

## 11. Position Properties
- `static` (default)
- `relative`
- `absolute`
- `fixed`
- `sticky`

## 12. Overflow
- `visible`
- `hidden`
- `scroll`
- `auto`
- `overflow-x` and `overflow-y`

## 13. Float
- `float: left`
- `float: right`
- `float: none`
- `clear` property to control float behavior

## 14. Flexbox
- **Container Properties**:
  - `display: flex`
  - `flex-direction`
  - `justify-content`
  - `align-items`
  - `flex-wrap`
- **Item Properties**:
  - `flex-grow`
  - `flex-shrink`
  - `flex-basis`
  - `order`

## 15. Grid
- **Container Properties**:
  - `display: grid`
  - `grid-template-columns`
  - `grid-template-rows`
  - `grid-gap`
  - `grid-template-areas`
- **Item Properties**:
  - `grid-column`
  - `grid-row`
  - `grid-area`

## 16. Transform
- `translate(x,y)`
- `rotate(deg)`
- `scale(x,y)`
- `skew(x-angle,y-angle)`

## 17. Transition
- `transition-property`
- `transition-duration`
- `transition-timing-function`
- `transition-delay`
- Shorthand: `transition: all 0.3s ease`

## 18. Animation
```css
@keyframes animationName {
    from {
        /* properties */
    }
    to {
        /* properties */
    }
}
```
- `animation-name`
- `animation-duration`
- `animation-timing-function`
- `animation-delay`
- `animation-iteration-count`
- `animation-direction`
- `animation-fill-mode`
- Shorthand: `animation: name duration timing-function delay iteration-count direction fill-mode`