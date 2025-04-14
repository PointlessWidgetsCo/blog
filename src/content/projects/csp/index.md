---
title: "Commonwealth Supported Places Postgrad Database 🎓"
description: "Database of Commonwealth Supported Postgraduate Courses in Australia"
date: "April 15 2025"
demoURL: "https://pointlesswidgets.co/blog/csp"
repoURL: "https://github.com/PointlessWidgetsCo/csp"
---

## Overview
This project aims to provide a comprehensive list of postgraduate courses in Australia that are available as Commonwealth Supported Places (CSP). A Commonwealth Supported Place is a study place in a higher education course where the Australian government contributes to the cost of your education, meaning you pay a reduced student contribution compared to full-fee-paying students.

## Motivation
As higher education costs continue to rise, it can be challenging for students to find affordable postgraduate opportunities. This collection of CSP courses provides an invaluable resource for prospective postgraduate students looking to benefit from government-subsidised education. By gathering key details about various postgraduate programs, this project aims to make it easier for students to find courses that align with their career goals and financial needs.

## What Are Commonwealth Supported Places (CSP)?
Commonwealth Supported Places are available to Australian citizens, permanent residents, and New Zealand citizens for various undergraduate and postgraduate programs. The Australian government subsidises a portion of the tuition fees, significantly reducing the cost of education for eligible students. While the government covers part of the cost, students still need to contribute a portion of the tuition fee, which varies depending on the program and field of education.

## Dataset
The dataset contains the following details for each Commonwealth Supported Postgraduate Course:

1. **Course Name:** The official name of the postgraduate course.
1. **University Name:** The institution offering the course.
1. **State:** State of the university's primary campus.
1. **Duration:** The typical duration of the course, in years or semesters.
1. **Course Description:** A brief description of the course content and objectives.
1. **Updated Date:** The date the course information was last updated.
1. **Link to Course:** A direct link to the course page for further details.
1. **Field of Education, Broad (ASCED2):** My best guess of the course's field of education classification by the ASCED2 (Australian Standard Classification of Education) framework.
1. **Field of Education, Narrow (ASCED4):** My best guess of a more detailed classification of the course's field of education by ASCED4.
1. **Field of Education, Detailed (ASCED6):** My best guess of the most granular classification of the course's field of education by ASCED6.

## Methodology
To gather the data for this project, I used web scraping techniques to collect up-to-date information about Commonwealth Supported Postgraduate Courses from various Australian university websites. The methodology involved the following steps:

- **Identification of Target Websites:** First, I identified key Australian universities offering postgraduate programs with Commonwealth Supported Places.
- **Web Scraping Setup:** I set up a web scraping framework using Python libraries like BeautifulSoup and Scrapy. These tools allowed me to extract relevant data from university course pages.
- **Data Extraction:** The scraping process focused on extracting course names, university details, descriptions, duration, and fields of education classification.
- **Data Cleaning and Structuring:** After extraction, the data was cleaned to remove inconsistencies and structured into a table format that aligns with the required fields.
- **Data Updates:** Regular checks and updates were made to ensure that the information is as current as possible, including the "Updated Date" for each course.

## Caveats
- This list was heavily assisted by generative AI, so please use it with care and confirm details with official sources.
- There is no available information about CSP courses at **Batchelor Institute of Indigenous Tertiary Education**.
- CSPs are available at **University of Divinity** for students only from disadvantaged backgrounds.
- The **University of Melbourne** and **University of Canberra** assign CSP on a subject basis rather than on a course basis. Hence, to calculate costs of a course, you need to add individual subjects.
- **Bond University** is private, not-for-profit, university and hence not eligible for CSP.
- Each university is listed according to the location of their primary campus (some universities operate in multiple states). 

## Structure
The dataset is structured as a table, where each row corresponds to a specific postgraduate course. You can use this table to filter, sort, and explore courses by various fields, universities, or other criteria.

## Usage
This dataset can be used by prospective students, educational institutions, researchers, and anyone interested in understanding the landscape of Commonwealth Supported Postgraduate Courses in Australia.

## Output
<!-- DataTables CSS -->
<link href="https://cdn.datatables.net/v/dt/jq-3.7.0/dt-2.2.2/sp-2.3.3/sl-3.0.0/datatables.min.css" rel="stylesheet" integrity="sha384-wwmI7e7NXabxUs/dN23XQhx2K219b+uUDESZsuNNztQnOcwfr87umKlBk1j4pes5" crossorigin="anonymous1">

<!-- jQuery & DataTables JS -->
<script src="https://cdn.datatables.net/v/dt/jq-3.7.0/dt-2.2.2/sp-2.3.3/sl-3.0.0/datatables.min.js" integrity="sha384-hfAZRcvpHHQqR5wA9hrj1MgyvmBV+0wUzHE6EaeZb2rkseIYZG5E9TdxJmjk3Jux" crossorigin="anonymous1"></script>


<div class="w-screen mx-[calc(-50vw+50%)]">
    <div class="max-w-screen-lg mx-auto px-5">

<table id="cspdt" class="display" style="width:100%">
    <thead>
        <tr>
            <th></th>
            <th>Course</th>
            <th>Uni</th>
            <th>State</th>
            <th>FoE Broad</th>
            <th>FoE Narrow</th>
            <th>FoE Detailed</th>
    </thead>
    <tfoot>
        <tr>
            <th></th>
            <th>Course</th>
            <th>Uni</th>
            <th>State</th>
            <th>FoE Broad</th>
            <th>FoE Narrow</th>
            <th>FoE Detailed</th>
    </tfoot>
</table>

</div>
</div>

<script>
function format(d) {
    return (
        '<dl>' +
        '<dd>Duration: ' + d.Duration + '</dd>' + 
        '<dd>Location: ' + d.Location + '</dd>' + 
        '<dd>Description: ' + d.Description + '</dd>' +
        '<dd>Updated: ' + d.Updated + '</dd>' +
        '<dd><a href=' + d.URL + ' target="_blank">🔗 Link</a></dd>' +
        '</dl>' 
    );
}


let table = new DataTable('#cspdt', {
    ajax: '/data/csp.json',
    columns: [
        {
            className: 'dt-control',
            orderable: false,
            data: null,
            defaultContent: ''
        },
        { data: 'Course' },
        { data: 'Uni' },
        { data: 'State' },
        { data: 'FoE_asced2' },
        { data: 'FoE_asced4' },
        { data: 'FoE_asced6' }
    ],

    order: [[1, 'asc']],
    
    layout: {
        top1: {
            searchPanes: {
                cascadePanes: true,
                order: ['State', 'Uni', 'FoE Broad', 'FoE Narrow', 'FoE Detailed'],
                orderable: false,
                collapse: false
            }
        }
    },

    stateSave: true
});


table.on('click', 'td.dt-control', function (e) {
    let tr = e.target.closest('tr');
    let row = table.row(tr);

    if (row.child.isShown()) {
        row.child.hide();
    } else {
        row.child(format(row.data())).show();
    }
});

</script>

<!-- AJAX requires reload for unknown reasons 
<script>
  (function () {
    const url = new URL(window.location.href);

    // If no flag in the URL, add it and reload
    if (!url.searchParams.has('refreshedOnce')) {
      url.searchParams.set('refreshedOnce', 'true');
      window.location.replace(url.href);
    }
    // If flag exists, do nothing (let the page load normally)
  })();
</script>
-->

## TODO
- [x] Upload project to Github repo
- [x] Write blog post
- [ ] Check rows for major unis UNSW, USYD, UniMelb
- [ ] Write LinkedIn Post
- [x] Get rid of 00:00 in the Updated column
- [x] Solve refresh issue with AJAX

