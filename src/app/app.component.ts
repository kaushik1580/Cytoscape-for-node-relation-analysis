import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import popper from 'cytoscape-popper';

cytoscape.use(dagre);
cytoscape.use(popper);

// import { stylesheetObject } from './stylesheetObject';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('cy')
  el!: ElementRef;
  cy = cytoscape();

  ngOnInit() {
    this.cy = cytoscape({
      container: document.getElementById('cy'),
      elements: {
        nodes: [
          {
            data: {
              id: 'first',
              label: 'First',
              type: 'parent'
            }
          },
          {
            data: {
              id: 'RSecond',
              label: 'Second',
              type: 'parent'
            }
          },
          {
            data: {
              id: 'RThird',
              label: 'Third',
              type: 'parent'
            }
          },
          {
            data: {
              id: 'TFirst',
              label: 'T First',
              type: 'parent'
            }
          },
          {
            data: {
              id: 'TSecond',
              label: 'T Second',
              type: 'parent'
            }
          },
          {
            data: {
              id: 'TThird',
              label: 'T Third',
              type: 'parent'
            }
          },
          {
            data: {
              id: 'main',
              label: 'main_parent',
              type: 'parent'
            }
          },
          {
            data: {
              id: 'child',
              label: 'child',
              type: 'rect',
              parent: 'main'
            }
          },
          {
            data: {
              id: 'FFirst',
              label: 'FData',
              type: 'parent'
            }
          },
          {
            data: {
              id: 'dsi',
              label: 'IData',
              type: 'parent'
            }
          },
          {
            data: {
              id: 'dcs',
              label: 'SData',
              type: 'parent'
            }
          },
          {
            data: {
              id: 'dfc',
              label: 'CData',
              type: 'parent'
            }
          }
        ],
        edges: [
          {
            data: {
              id: 'rft',
              source: 'first',
              target: 'TFirst'
            }
          },
          {
            data: {
              id: 'RSecond_e',
              source: 'RSecond',
              target: 'TSecond'
            }
          },
          {
            data: {
              id: 'raw_third_trust_third',
              source: 'RThird',
              target: 'TThird'
            }
          },
          {
            data: {
              id: 'trust_first_security',
              source: 'TFirst',
              target: 'main'
            }
          },
          {
            data: {
              id: 'T_main',
              source: 'TSecond',
              target: 'main'
            }
          },
          {
            data: {
              id: 'tts',
              source: 'TThird',
              target: 'main'
            }
          },
          {
            data: {
              id: 'scf4',
              source: 'main',
              target: 'FFirst'
            }
          },
          {
            data: {
              id: 'ssI',
              source: 'main',
              target: 'dsi'
            }
          },
          {
            data: {
              id: 'scs',
              source: 'main',
              target: 'dcs'
            }
          },
          {
            data: {
              id: 'sfc',
              source: 'main',
              target: 'dfc'
            }
          }
        ]
      },
      // layout: {
      //   name: 'dagre',
      //   rankDir: 'LR',
      //   nodeSep: 90,
      //   edgeSep: 160,
      //   rankSep: 300,
      //   padding: 10,
      //   animate: true // whether to transition the node positions
      // },
      // style: stylesheetObject
    });

    // just some random height depending on the number of nodes
    let container = document.getElementById('cy');
    // container.style.height = `${this.cy.nodes().length * 80}px`;

    this.cy.resize();
    this.cy.fit();
  }
}
