---
title: "Looking to upskill with help from the Australian Government?"
description: "Database of Commonwealth Supported Postgraduate Courses in Australia"
date: "Apr 14 2025"
---

🎓 Some postgraduate university courses in Australia are Commonwealth Supported Places (CSPs)—meaning the government subsidises part of your tuition fees, potentially saving you thousands.

Using a mix of web scraping and GenAI, I’ve compiled a dataset of all postgraduate courses in Australia currently offering CSPs.

🔍 Each entry includes:
- Course description
- Duration
- Direct link to the official course page
- Estimated field of education classification (broad, narrow, and detailed levels using the ASCED framework)

💡 Important note:
A course offering a CSP doesn't guarantee you’ll get one. You'll need to meet the course's entry requirements, and places are offered on merit. Eligibility also depends on your citizenship or residency status.

ℹ️ Want to learn more about CSP eligibility?
👉 [StudyAssist - Commonwealth Supported Places](https://www.studyassist.gov.au/financial-and-study-support/commonwealth-supported-places-csps)


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

______________________________________________________________________________
#### Footnotes ####
- <small>This list was heavily assisted by GenAI, so please use it with care and confirm details with official sources.</small>
- <small>The Field of Education has been estimated using GenAI and personal judgement. While broad classifications are generally reliable, users are advised to treat narrow and detailed levels with caution.</small>
- <small>There is no available information about CSP courses at **Batchelor Institute of Indigenous Tertiary Education**.</small>
- <small>CSPs are available at **University of Divinity** for students only from disadvantaged backgrounds.</small>
- <small>The **University of Melbourne** and **University of Canberra** assign CSP on a subject basis rather than on a course basis. Hence, to calculate costs of a course, you need to add individual subjects.</small>
- <small>**Bond University** is private, not-for-profit, university and hence not eligible for CSP.</small>
- <small>Each university is listed according to the location of their primary campus (some universities operate in multiple states).</small>
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

    columnDefs: [
    {
      searchPanes: {
        dtOpts: {
          order: [[1, 'desc']]
        }
      },
      targets: [1]
    }
  ],
    
    layout: {
        top1: {
            searchPanes: {
                cascadePanes: true,
                order: ['State', 'Uni', 'FoE Broad', 'FoE Narrow', 'FoE Detailed'],
                collapse: false,
                controls: false
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

<!-- AJAX requires reload for unknown reasons -->
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