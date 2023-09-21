import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import icons from the brands package

// Define a common style for all icons
const iconStyle = {
  width: '100px', // Adjust the width as needed
  height: '50px', // Adjust the height as needed
  marginBottom: '10px', // Add margin at the bottom to increase spacing
};

const Contact = () => {
    return (
        <section id="contact" className="bg-white-100 py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
                <p className="text-lg text-gray-700 mb-8">
                    If you would like to get in touch with me for any inquiries, job opportunities, or collaborations, please feel free to reach out using the following methods:
                </p>

                <div className="contact-options flex flex-wrap justify-center -mx-4">
                    <div className="contact-item flex flex-col items-center justify-center px-4 mb-6">
                        <a href="mailto:iec2020083@iiita.ac.in" className="text-blue-700 hover:underline">
                            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} className="text-blue-500" />
                            <span>Email</span>
                        </a>
                    </div>

                    <div className="contact-item flex flex-col items-center justify-center px-4 mb-6">
                        <a href="https://www.linkedin.com/in/neerajgupta0912/" className="text-blue-700 hover:underline">
                            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} className="text-blue-500" />
                            <span>LinkedIn</span>
                        </a>
                    </div>

                    <div className="contact-item flex flex-col items-center justify-center px-4 mb-6">
                        <a href="https://github.com/codelord09" className="text-blue-700 hover:underline">
                            <FontAwesomeIcon icon={faGithub} style={iconStyle} className="text-blue-500" />
                            <span>GitHub</span>
                        </a>
                    </div>

                    <div className="contact-item flex flex-col items-center justify-center px-4 mb-6">
                        <a href="https://leetcode.com/neerajgupta0912/" className="text-blue-700 hover:underline">
                            <FontAwesomeIcon icon={faLink} style={iconStyle} className="text-blue-500" />
                            <span>LeetCode</span>
                        </a>
                    </div>

                    <div className="contact-item flex flex-col items-center justify-center px-4 mb-6">
                        <a href="https://twitter.com/NeerajGupta0912" className="text-blue-700 hover:underline">
                            <FontAwesomeIcon icon={faTwitter} style={iconStyle} className="text-blue-500" />
                            <span>Twitter</span>
                        </a>
                    </div>
                </div>

                <p className="text-lg text-gray-700 mt-8">
                    Feel free to connect with me on social media, drop me an email, or check out my coding profiles. I&apos;m always open to new opportunities and discussions!
                </p>
            </div>
        </section>
    );
};

export default Contact;
