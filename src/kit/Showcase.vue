<template>
  <div class="grid-container">
    <h1>Showcase</h1>
    <hr />
    <div>
      <h2>Typography:</h2>
      <hr />
      <div>
        <h3 class="color-primary">Header</h3>
        <h1>h1. This is a very large header.</h1>
        <h2>h2. This is a large header.</h2>
        <h3>h3. This is a medium header.</h3>
        <h4>h4. This is a moderate header.</h4>
        <h5>h5. This is a small header.</h5>
        <h6>h6. This is a tiny header.</h6>
      </div>
      <br />
      <div>
        <h3 class="color-primary">Paragraph</h3>
        <hr />
        <p>
          This is a paragraph. Paragraphs are preset with a font size, line
          height and spacing to match the overall vertical rhythm. To show what
          a paragraph looks like this needs a little more content so, did you
          know that there are storms occurring on Jupiter that are larger than
          the Earth? Pretty cool. Wrap strong around type to
          <strong>make it bold!</strong>. You can also use em to
          <em>italicize your words</em>.
        </p>
      </div>
      <br />
      <div>
        <h3 class="color-primary">Unordered list</h3>
        <ul>
          <li>List item with a much longer description or more content.</li>
          <li>List item</li>
          <li>
            List item
            <ul>
              <li>Nested list item</li>
              <li>Nested list item</li>
              <li>Nested list item</li>
            </ul>
          </li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </div>
      <br />
      <div>
        <h3 class="color-primary">Ordered list</h3>
        <ol>
          <li>Cheese (essential)</li>
          <li>Pepperoni</li>
          <li>
            Bacon
            <ol>
              <li>Normal bacon</li>
              <li>Canadian bacon</li>
            </ol>
          </li>
          <li>Sausage</li>
          <li>Onions</li>
          <li>Mushrooms</li>
        </ol>
      </div>
    </div>
    <div>
      <h2>Forms:</h2>
      <hr />
      <div>
        <h3 class="color-primary">Inputs:</h3>
        <form>
          <div class="grid-x">
            <div class="medium-6 cell">
              <label
                >Input Label
                <input type="text" placeholder=".medium-6.cell" />
              </label>
            </div>
            <div class="medium-6 cell">
              <label
                >Input Label
                <input type="text" placeholder=".medium-6.cell" />
              </label>
            </div>
          </div>
        </form>
      </div>
      <div>
        <h3 class="color-primary">Button</h3>
        <button class="button">Primary</button>
        <button class="button secondary">Secondary</button>
        <button class="button warning">Warning</button>
        <button class="button alert">Alert</button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
