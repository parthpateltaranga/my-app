
const AccessibilityPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">Accessibility Plan</h1>
      <p className="mt-4">Hinuinsure is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</p>

      <h2 className="text-2xl font-bold mt-8">Conformance status</h2>
      <p className="mt-4">The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-blue-600">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Hinuinsure is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.</p>

      <h2 className="text-2xl font-bold mt-8">Feedback</h2>
      <p className="mt-4">We welcome your feedback on the accessibility of Hinuinsure. Please let us know if you encounter accessibility barriers on Hinuinsure:</p>
      <ul className="list-disc list-inside mt-4">
        <li>Phone: 1-855-550-5515</li>
        <li>E-mail: <a href="mailto:support@Hinuinsure.ca" className="text-blue-600">support@Hinuinsure.ca</a></li>
        <li>Visitor address: 123 Insurance St, Toronto, ON, Canada</li>
      </ul>
      <p className="mt-4">We try to respond to feedback within 5 business days.</p>

      <h2 className="text-2xl font-bold mt-8">Technical specifications</h2>
      <p className="mt-4">Accessibility of Hinuinsure relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
      <ul className="list-disc list-inside mt-4">
        <li>HTML</li>
        <li>WAI-ARIA</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <p className="mt-4">These technologies are relied upon for conformance with the accessibility standards used.</p>

      <h2 className="text-2xl font-bold mt-8">Limitations and alternatives</h2>
      <p className="mt-4">Despite our best efforts to ensure accessibility of Hinuinsure, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.</p>
      <p className="mt-4">Known limitations for Hinuinsure:</p>
      <ul className="list-disc list-inside mt-4">
        <li>Images may not have text alternatives: We are working to add text alternatives for all images.</li>
        <li>Some documents might be in PDF format and not fully accessible.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">Assessment approach</h2>
      <p className="mt-4">Hinuinsure assessed the accessibility of Hinuinsure by the following approaches:</p>
      <ul className="list-disc list-inside mt-4">
        <li>Self-evaluation</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">Formal approval of this accessibility statement</h2>
      <p className="mt-4">This Accessibility Statement is approved by:</p>
      <p className="mt-4">Hinuinsure<br />Management</p>

      <h2 className="text-2xl font-bold mt-8">Date</h2>
      <p className="mt-4">This statement was created on 3 November 2025.</p>
    </div>
  );
};

export default AccessibilityPage;
