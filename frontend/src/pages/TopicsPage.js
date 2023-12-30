function TopicsPage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <nav class="local">
                <a href="#servers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    An <strong>index.html</strong> file is often called the <strong>designated homepage</strong> on a <strong>web server</strong>.
                    It is usually found in the root directory, and most web applications are 
                    configured to display this file when a <strong>GET request</strong> is received for '/'. 
                    In other words, it is known as the homepage because entering the <strong>domain name</strong> 
                    without specifying a file will take the user to this file.
                </p>
                <p>
                    When the file is viewed from the local computer, the request <strong>URL</strong> is the path to the file from the 
                    computer's hard drive. 
                    In contrast, when viewed on the web server, the request URL is the path to the file 
                    from the root directory of the web server.
                    The request method is GET.
                    The status code is 200 (OK).
                    The request header from the local drive file provides information on the device  and browser type.
                    The response header from the local drive file contains the content type and last modification time.
                    The additional request header information shown exclusively when viewed from the web server includes the 
                    language, cache controls, cookies, host, and user-agent.
                    The additional response header information shown exclusively when viewed from the web server includes the 
                    date and time accessed, content length and encoding, accept ranges, and server type.
                    The <strong>remote address (IP)</strong> is also included in the general network information.
                </p>
                <p>
                    The favicon.ico file has a <strong>status code</strong> of 200 because the Oregon State web server
                    provides the file, and it is loaded correctly. The main.css and main.js files
                    returned a 404 error. This means the files were not found. This happens because the
                    index.html boilerplate code includes lines that reference a main.css and main.js
                    file, but neither are present on the web server.
                </p>
                <p>
                    The URL https://web.engr.oregonstate.edu/~lappjo/a1-lappjo/ can be divided into 
                    four parts. In this example, the <strong>scheme</strong> is “https”. This tells the web client
                    which protocol to use when requesting the resource. 
                    The <strong>subdomain</strong> is “web.engr”. This is a subsection of the server. The <strong>host domain</strong> is 
                    “oregonstate.edu”. The <strong>Domain Name System</strong> maps this to an IP address to connect to
                    the correct web server. “/~lappjo/a1-lappjo/” is the path to the resource. This
                    tells the request where to find the resource within the web server. The resource 
                    in this example is not specified. This is because the index.html file is 
                    configured to load automatically when a resource is not specified.
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>
                    Frontend design is centered around tailoring the user experience on the web application.
                    The visual design provides a consistent theme for the pages through colors, fonts, typography, and includes photography, icons, 
                    illustrations, and navigation systems.
                    There should be a consistent color and overall style that ensure the user that each page is a part of a larger experience.
                    The graphical user-interface allows for an interactive experience that should be intuitive for the user.
                    This experience is a major factor in the users' perceived fluidity of navigation.
                    Trends in frontend design change throughout the years as trends come and go, so it is important to stay up-to-date when considering design choices.
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>The web application aids the user in reaching their goals accurately. The design should aid the user in finding and completing the task they came with.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>
                        The user performs tasks in the least amount of steps and receives results quickly. The shorter the user's time on the website, the more seamless the experience
                        appears to them.
                    </dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>
                        The web application is intuitive for users to understand the first time and remember on subsequent visits. The user should be able to find everything they
                        are looking for on the first time, and be able to repeat the process.
                    </dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>
                        The web application avoids accessibility and availability issues. This means there should not be erroneous links, overlapping content, and should be usable
                        by different types of users.
                    </dd>
                    <dt><strong>Enjoyable/engaging</strong></dt>
                    <dd>
                        The web application fits the niche of the target audience and is an overall positive experience. A user is much more likely to revisit the site if their 
                        experience was enjoyable.
                    </dd>
                </dl>
                <p>
                    The <strong>header</strong> element often contains the banner for the site and is consistent from page-to-page 
                    to ensure the user knows they are on the same site. The <strong>nav</strong> element contains links to other pages within the site to allow 
                    the user to navigate the site. The <strong>main</strong> element is the primary area of content. The <strong>section</strong> element is used within a 
                    main element and groups together similar content. The <strong>article</strong> element is usually placed inside a section element and contains 
                    a single specific topic. The <strong>aside</strong> and <strong>blockquote</strong> elements allow for related content to be displayed on the side, and the 
                    <strong>figure</strong> element places a piece of media on the side. The <strong>footer</strong> element follows the main element and contains legal information, 
                    contact information, and links to important pages within the site. The <strong>div</strong> element is used to divide content that does not 
                    fit into any other categories.
                </p>
                <ol>
                    <li>
                        An anchor can link to external content if the href <strong>attribute</strong> contains the entire URL of the content.
                        The URL must be an <strong>absolute path</strong> to the resource because there is no <strong>relative path</strong> from the 
                        current file to the external resource.
                    </li>
                    <li>
                        An anchor can link to internal content if the href attribute contains a hashtag followed by an ID equal to the ID attribute of 
                        another element on the page. This will move the content such that the element with the matching ID is at the top of the <strong>viewport</strong>.
                    </li>
                    <li>
                        An anchor can link to another page within the same site by using a relative path in the href attribute. A relative path is the path 
                        from the current page to the desired page. This is usually wrapped in a navigation element to create a block of clickable links to other pages. 
                        These are often within the same directory or in near child/parent directories. Use “../” 
                        to move to the parent directory, and “/” followed by the directory name to move to a child directory.
                    </li>
                </ol>
            </article>
            <article id="images">
                <h3>Optimizing Images</h3>
                <p>
                    Images should have a descriptive file name. A name that accurate and concisely describes the key features of the image will improve search engine optimization, 
                    making your website/images more likely to be seen when those keywords are searched. Images should have a small image size to decrease the load time and save server space. 
                    Images should be cropped and dimensions reduced to fit correctly within the space of the page. This ensures there is no overlap or missing information and further decreases the loading time. 
                    Different images will be more optimally compressed when saved as a particular file types. Choosing the correct file format will create the best balance between image quality and image size. 
                    A newer standard is to include multiple versions of the same image with different resolution. This ensures that it will display clearly on screens with different pixels per inch, while reducing file sizes when possible. 
                    Color mode can also affect image sizes. RGB color mode gives each pixel three color values between 0 and 255, while indexed color mode requires only one color value between 0 and 255. 
                </p>
                <p>
                    The most appropriate file formats for photos are .JPG and .WebP. 
                    Both file types compress the raw photos into manageable file sizes to fit on a web server, and .WebP includes an alpha channel for transparency. 
                    The most appropriate file formats for line art are .GIF, .PNG, and .SVG. .GIF files have 8-bit transparency, an indexed color mode, and allow for sequences of photos to create animated images. 
                    .PNG files have an alpha channel for transparency, allowing them to be placed over any colors without distortion. The color mode can be RGB or indexed. 
                    .SVG files are scalable because all graphics are mathematically calculated regardless of size. This allows the images to be as large or small as needed without sacrificing quality.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    A favicon is a small icon found on browser tabs, cellphones, search engine results list, and other areas where the website may be mentioned. 
                    This icon often represents the brand of the website and allows the user to visually recognize and remember the site they are on. 
                    This adds an element of professionalism and increases the chances of users identifying the website; 
                    On a search engine results list, a website with a favicon is more likely to show before those without one.
                </p>
            </article>
        </>
        );
    }
export default TopicsPage;