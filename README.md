# maestro-lms
Code to support the Maestro Learning Management System

Because the LMS we've selected is so limited in terms of being able to add custom code, we have to use this roundabout approach to do almost everything.  The custom styles and scripts are sent to our LMS by using https://rawgit.com/ and a script tag inline in the widget (widgets' source code is edited in the LMS) that creates the appropriate `link` or `script` tag and sets the source to the generated RawGit URL:

```javascript
<script type="text/javascript">
(function (doc) {
  var link = doc.createElement("link");
  link.rel  = "stylesheet";
  link.type = "text/css";
  link.href = "https://url.to/raw/git/resource.css";
  doc.head.appendChild(link);
})(document);
</script>
```
