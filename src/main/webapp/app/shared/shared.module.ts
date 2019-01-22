import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import {
    PsybergateMilestoneTrackerSharedLibsModule,
    PsybergateMilestoneTrackerSharedCommonModule,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective
} from './';

@NgModule({
    imports: [PsybergateMilestoneTrackerSharedLibsModule, PsybergateMilestoneTrackerSharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [PsybergateMilestoneTrackerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PsybergateMilestoneTrackerSharedModule {
    static forRoot() {
        return {
            ngModule: PsybergateMilestoneTrackerSharedModule
        };
    }
}
